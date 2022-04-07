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
        expect(wrapper.html()).toMatchSnapshot()

    })
    test('debe de mostrar las 4 opciones li correctamente', () => {
        expect(wrapper.findAll('li').length).toBe(4)
        expect(wrapper.findAll('li').at(0).text()).toBe('bulbasaur')
        expect(wrapper.findAll('li').at(1).text()).toBe('ivysaur')
        expect(wrapper.findAll('li').at(2).text()).toBe('venusaur')
        expect(wrapper.findAll('li').at(3).text()).toBe('charmander')

    })
    test('debe de emitir "selection" con sus respectivos parametros al hacer click' , () => {
        wrapper.findAll('li').at(0).trigger('click')
        expect(wrapper.emitted().selection).toBeTruthy()
        expect(wrapper.emitted().selection[0]).toEqual([1])
    })
 })