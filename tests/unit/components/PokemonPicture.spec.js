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
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showpokemon: false,
            }
        })
        const [img1, img2] = wrapper.findAll('img')
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

    test('debe de mostrar el pokemon si showpokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showpokemon: true,
            }
        })
        const img1 = wrapper.find('img')
        expect(img1.exists()).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBe(true)
        expect(img1.classes('fade-in')).toBe(false)

    })
})