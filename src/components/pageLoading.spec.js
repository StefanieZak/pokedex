/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Header from '@/components/PageLoading.vue'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/'
    }
  ]
});


describe('PageLoading.vue', () => {
  it('should show correctly the title.', () => {
    localVue,
    router
    const msg = 'Loading...'
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    expect(wrapper.text()).toMatch(msg)
  })

  it('input field must exist', () => {
    localVue,
    router
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    expect(wrapper.find('section').exists()).toBeTruthy()
  })

  it('must correctly apply all classes', () => {
    localVue,
    router
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    expect(wrapper.find('section').classes()).toContain('loading');
  })

  it('should render the content correctly(IMG)', () => {
    localVue,
    router
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    expect(wrapper.find('img')).toBeTruthy();
    expect(wrapper.find('img').attributes().src).toContain('@/assets/pokebola.png');
  })

  it('should render the content correctly', () => {
    localVue,
    router
    const wrapper = shallowMount(Header, {
      stubs: ['router-link']
    })
    const list = wrapper.find('.loading');
    expect(wrapper.find('img')).toBeTruthy();
    expect(wrapper.find('p')).toBeTruthy();
    expect(list.find('p').text()).toBe('Loading...')
  }) 
})
