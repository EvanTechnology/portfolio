/* import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import aboutComponent from '../components/about'
import worksComponent from '../components/portfolio'
import reviewsComponent from '../components/reviews'
import loginComponent from '../components/login'

const routes = [
    {
        path: '',
        component: aboutComponent,
        meta: {
          }
        
    },
    {
        component: worksComponent,
        path: '/works',
        meta: {
        }
    },
    {
        component: reviewsComponent,
        path: '/reviews',
        meta: {
        }
    },
    {
        component: loginComponent,
        path: '/login',
        meta: {
            public: true
          }
    },
];

export default new VueRouter({routes});
 */
export default [
    {
      path: "/",
      component: () => import("../components/about.vue"),
      meta: {
        title: "Блок «Обо мне»"
      }
    },
    {
      path: "/works",
      component: () => import("../components/portfolio.vue"),
      meta: {
        title: "Блок «Работы»"
      }
    },
    {
      path: "/reviews",
      component: () => import("../components/reviews.vue"),
      meta: {
        title: "Блок «Отзывы»"
      }
    },
    {
      path: "/login",
      component: () => import("../components/login.vue"),
      meta: {
        public: true
      }
    }
  ]; 