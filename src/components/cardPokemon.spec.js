/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/",
    },
  ],
});

describe("Header.vue", () => {
  it("should show correctly the title.", async () => {
    localVue, router;
    const title = "Pokedex";
    const wrapper = shallowMount(Header, {
      stubs: ["router-link"],
    });
    expect(wrapper.text()).toMatch(title);
  });

  it("input field must exist", () => {
    localVue, router;
    const wrapper = shallowMount(Header, {
      stubs: ["router-link"],
    });
    expect(wrapper.find("#search").exists()).toBeTruthy();
  });
});
