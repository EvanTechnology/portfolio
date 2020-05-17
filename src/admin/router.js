import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutComponent from './components/about'
import worksComponent from './components/portfolio'
import reviewsComponent from './components/reviews'
import mainComponent from './components/main'

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
];

export default new VueRouter({routes, mode:'history'});