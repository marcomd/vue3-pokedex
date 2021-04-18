<template>
  <div id="pokemon-list">
    <div class="search">
      <input type="text" placeholder="Cerca" v-model="searchName" />
    </div>
    <div v-if="filteredPokemons.length > 0" class="pokemon-list-body">
      <div class="column">
        <table style="width: 100%;">
          <tbody>
            <tr v-for="pokemon in filteredPokemons" :key="pokemon.name">
              <td>
                <img v-if="pokemon.id" 
                    :src="getImageFromId(pokemon.id)" :alt="pokemon.name">
              </td>
              <td>{{ pokemon.name }}</td>
              <td><button @click="selectPokemon(pokemon)" :disabled="pokemon.loading">Mostra</button></td>
              <td v-show="pokemon.loading">Loading...</td> 
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column">
        <PokemonShow v-if="selectedPokemon" :pokemon="selectedPokemon" />
      </div>
    </div>
    <div v-else-if="!canSearchPokemons">
      <h3>Scrivi le iniziali del nome</h3>
    </div>
    <div v-else>
      <h3>Non ho trovato nessun pokemon</h3>
    </div>
  </div>
</template>

<script>
  //import { ref } from "vue"
  import axios from "axios"
  import PokemonShow from "@/components/PokemonShow"
  //import usePokemonSelection from '@/composables/usePokemonSelection'

  export default {
    name: "PokemonIndex",

    components: {
      PokemonShow,
    },

    data() {
      return {
        searchName: '',
        pokemons: [],
        selectedPokemon: null,
        loadingPokemon: false,
      }
    },

    created() {
      this.getPokemons()
    },

    computed: {
      canSearchPokemons() {
        return this.searchName.length > 1
      },
      filteredPokemons() {
        return this.canSearchPokemons ? 
          this.pokemons.filter(pokemon => pokemon.name.startsWith(this.searchName.toLowerCase())) 
          : 
          []
      }
    },

    methods: {
      getPokemons() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
          .then(response => { 
              this.pokemons = response.data?.results || [] 
              //this.addMoreDetails()
              this.addIdsFromUrl()
            })
      },
      addIdsFromUrl() {
        this.pokemons.forEach(pokemon => {
          const ar = pokemon.url.match("^.+/pokemon/([0-9]{1,6})/$")
          if (ar) pokemon.id = ar[1]
        })
      },
      // addMoreDetails() {
      //   this.pokemons.forEach(pokemon => this.getPokemonDetails(pokemon))
      // },
      selectPokemon(pokemon) {
        if (pokemon.details) {
          this.selectedPokemon = pokemon
        } else {
          pokemon.loading = true
          axios.get(pokemon.url)
            .then(response => { 
              pokemon.details = response.data
              this.selectedPokemon = pokemon
              pokemon.loading = false
            })
        }
      },
      // getPokemonDetails(pokemon) {
      //   axios.get(pokemon.url)
      //     .then(response => pokemon.details = response.data)
      // },
      getImageFromId(id, type="front_default") {
        switch (type) {
          case "front_default":
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        }
      }
    },
  }
</script>

<style scoped>
  #pokemon-list {
    display: grid;
    place-items: center;
  }
  .pokemon-list-body {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-column-gap: 10px;
    width: 60rem;
  }
  .column {
    border: 1px gray dashed;
  }
  #pokemon-list table > tbody > tr {
    padding: 1rem;
  }
    #pokemon-list table > tbody > tr > td {
    padding: 0rem 1rem;
  }
  div.search {
    padding: 2rem 0rem;
  }
  input[type=text] {
    padding: 0.1rem 0.5rem;
  }
</style>