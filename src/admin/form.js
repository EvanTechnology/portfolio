import Vue from 'vue';

const login = {
  template: "#loginComponent",
  data: () => ({
    user: {
      name: "",
      password: "",
    }
  }),
  methods: {
    login() {
      console.log(this.user)
    }
  }
};

new Vue({
  el: "#app-root",
  template: "#loginComponent",
  components: login
});