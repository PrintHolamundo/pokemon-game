<template>
  <h1>¿Quien es ese Pokemon?</h1>
  <PokemonPicture />
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";

export default {
  components: { PokemonOptions, PokemonPicture },
};
</script>

<style></style>
