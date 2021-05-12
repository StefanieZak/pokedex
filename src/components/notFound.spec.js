/* eslint-disable no-undef */
import { shallowMount, createLocalVue } from "@vue/test-utils";
import NotFound from "@/components/NotFound.vue";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      name: "*",
      path: "/",
    },
  ],
});

describe("NotFound.vue", () => {
  it("should show correctly the title.", () => {
    localVue, router;
    const p = "4";
    const wrapper = shallowMount(NotFound, {
      stubs: ["router-link"],
    });
    expect(wrapper.text()).toMatch(p);
  });

  it("should render the content correctly", () => {
    localVue, router;
    const wrapper = shallowMount(NotFound, {
      stubs: ["router-link"],
    });
    const list = wrapper.find(".title");
    expect(wrapper.find("p")).toBeTruthy();
    expect(list.find("p").text()).toBe("4");
    expect(list.find("p").color()).toBe("#FFF700");
    expect(wrapper.find("img")).toBeTruthy();
  });
});
