import login from "./login.vue";
import {shallowMount} from "@vue/test-utils"

describe("Есть кнопка в Authorization", () => {

    it ("Поиск по классу", () => {
        const wrapper = shallowMount(login);
        const btn = wrapper.find(".entry__submit-btn");

        expect(btn.element).toMatchSnapshot();
    });
    it ("Поиск по имени", () => {
        const wrapper = shallowMount(login);
        const btn = wrapper.find("button");

        expect(btn.text()).toBe("Authorization");
    });

})