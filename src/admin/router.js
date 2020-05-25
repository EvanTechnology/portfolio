import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutComponent from './components/about'
import worksComponent from './components/portfolio'
import reviewsComponent from './components/reviews'
import loginComponent from './components/login'

const routes = [
    {
        path: '',
        component: aboutComponent
        
    },
    {
        component: worksComponent,
        path: '/works'
    },
    {
        component: reviewsComponent,
        path: '/reviews'
    },
    {
        component: loginComponent,
        path: '/login'
    },
];

export default new VueRouter({routes});