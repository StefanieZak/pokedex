// /* eslint-disable no-undef */
// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import CardPokemon from '@/components/CardPokemon.vue'
// import VueRouter from 'vue-router'

// const localVue = createLocalVue()
// localVue.use(VueRouter)
// const router = new VueRouter({
//   routes: [
//     {
//       name: 'Home',
//       path: '/'
//     }
//   ]
// });


// describe('CardPokemon.vue', () => {
//   it('should show correctly card.', async () => {
//     localVue,
//     router
//     const wrapper = shallowMount(CardPokemon, {
//       stubs: ['router-link'],
//       props: { name: 'bulbasaur', url:'https://pokeapi.co/api/v2/pokemon/1/'}
//     })
//     await wrapper.setData({ 
//       itemPokemon: "t",
//       typeCard: "e",
//       bgType:"s",
//       cardByRoute: "t",
//       labelByRoute: "e",
//      })
//     expect(wrapper.classes()).toContain('card')
//   })
// })
