import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => { 
    test('axios debe de estar coinfigurado en el api de pokemon',() =>{
        expect(pokemonApi.defaults.baseURL)
        .toBe('https://pokeapi.co/api/v2/pokemon');
    }) 
})