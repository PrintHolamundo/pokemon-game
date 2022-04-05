import { getPokemons } from "@/helpers/getPokemonOptions";

describe("getPokemonOptions helpers", () => {
    test("debe de regresar un arreglo de numeros", () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
        expect(pokemons[649]).toBe(650);
        expect(pokemons[500]).toBe(501);
        expect(pokemons[649]).toBe(650);
    });

    test("debe de retornar un arreglo de 4 elementos con nombres de pokemons", () => { });

    test("getPokemonsOptions debe de retornar un arreglo mezclado", () => { });
});