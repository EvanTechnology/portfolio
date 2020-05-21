import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutComponent from './components/about'
import worksComponent from './components/portfolio'
import reviewsComponent from './components/reviews'
import loginComponent from './components/login'

const routes = [
    {
        path: '/admin',
        component: aboutComponent
        
    },
    {
        component: worksComponent,
        path: '/admin/works'
    },
    {
        component: reviewsComponent,
        path: '/admin/reviews'
    },
    {
        component: loginComponent,
        path: '/admin/login'
    },
];

export default new VueRouter({routes, mode:'history'});