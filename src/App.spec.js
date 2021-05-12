/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from './App'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter();

describe('App', () => {
  it('should be a Vue instance', () => {
    localVue,
    router
    const wrapper = shallowMount(App)
    expect(wrapper.vm).toBeTruthy()
  })
})
