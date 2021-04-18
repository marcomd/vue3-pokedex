<template>
  <div class="home">
    <Welcome />
    <PokemonIndex />
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue"
import PokemonIndex from "@/components/PokemonIndex.vue"

export default {
  name: "Home",
  components: {
    Welcome,
    PokemonIndex,
  }
};
</script>

<style scoped>
</style>