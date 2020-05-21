import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import axios from 'axios';


new Vue({
  el: "#app-root",
    router,
    
  render: h => h(App)
});