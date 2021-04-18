import { reactive } from 'vue'
import axios from 'axios'

// Se definito fuori dalla funzione, si crea un set "globale" (condiviso tra tutti i componenti
// che includono questa composable)
let pokemons = reactive(new Set())

export const usePokemonSelection = function() {  
  // Se definito all'interno della funzione, si crea un set per ogni istanza (ogni uso di usePokemonSelection)
  // let pokemons = reactive(new Set())
  let toggle = function(pokemon) {
    if (pokemons.has(pokemon)) {
      pokemons.delete(pokemon)
      console.log('pokemonSelection remove, remain ', pokemons.size)
    } else {
      pokemons.add(pokemon)
      console.log('pokemonSelection add, new size', pokemons.size)
    }
  }
  let clear = () => {
    pokemons.clear()
  }
  let addMultiple = (newPokemons) => {
    newPokemons.forEach(pokemon => {
      pokemons.add(pokemon)
    })
  }
  let forSelected = (fn) => {
    pokemons.forEach(pokemon => { 
      fn(pokemon)
      axios.put(`http://localhost:3000/pokemons/${pokemon.id}`, pokemon)
    })
    clear()
  }
  let markFavorite = (value=true) => forSelected(pokemon => pokemon.favorite = value)
  let archive = () => forSelected(pokemon => pokemon.archived = true)
 
  return {
    pokemons,
    toggle,
    clear,
    addMultiple,
    markFavorite,
    archive
  }
}


export default usePokemonSelection