<template>
  <div id="pokemon-show">
    <h2>{{ pokemon.name }}</h2>
    <div v-if="pokemon.details" class="pokemon-details">
      <img :src="pokemon.details.sprites.other.dream_world.front_default" :alt="pokemon.name">
      <div class="detail general">
        <h3>Caratteristiche:</h3>
        <p>Peso:  {{ pokemon.details.weight }}</p>
        <p>Altezza:  {{ pokemon.details.height }}</p>
      </div>
      <div v-if="pokemon.details.abilities" class="detail abilities">
        <h3>Abilità:</h3>
        <ul>
          <li v-for="item in pokemon.details.abilities" :key="item.ability.name">{{ item.ability.name }}</li>
        </ul>
      </div>
      <div v-if="pokemon.details.types" class="detail types">
        <h3>Tipo:</h3>
        <ul>
          <li v-for="item in pokemon.details.types" :key="item.type.name">{{ item.type.name }}</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PokemonShow",

  props: {
    pokemon: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  div.detail {
    margin-top: 3rem;
  }
  ul > li {
    list-style-type: none;
  }
</style>