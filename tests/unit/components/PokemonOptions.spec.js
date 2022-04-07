import {shallowMount} from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock';

describe('PokemonOptions Component', () => { 
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions,{
            props: {
                pokemons: pokemons
            }
        })
    })
    test('debe de hacer match con el snapshot', () => {
        console.log( wrapper.html())
        expect(wrapper.html()).toMatchSnapshot()

    })
 })