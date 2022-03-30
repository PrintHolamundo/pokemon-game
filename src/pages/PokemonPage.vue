<template>
  <h1>¿Quien es ese Pokemon?</h1>
  <PokemonPicture :pokemonId="251" :showPokemon="true"/>
  <PokemonOptions :pokemons="pokemonArr"/>

</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";


export default {
  components: { PokemonOptions, PokemonPicture },
  data() {
    return {
      pokemonArr:[]
    };
  },
  methods:{ 
    async mixPokemonArray(){
      this.pokemonArr = await getPokemonOptions()
    }
  },
  mounted(){
    this.mixPokemonArray()
  }
}
</script>

<style></style>
