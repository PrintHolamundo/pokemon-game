import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'


describe('PokemonPicture', () => {


    test('debe de hacer match con el snapshop', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showpokemon: false,
            }
        })
        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {

    })

    test('debe de mostrar el pokemon si showpokemon:true', () => {

    })
})