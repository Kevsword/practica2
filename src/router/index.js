import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        /*
              path: '/',
              name: 'Home',
              component: Home
          },
          {*/
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue')
    },
    {
        path: '/noticias',
        name: 'Noticias',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Noticias" */ '../views/Noticias.vue')
    },
    {
        path: '/articulos',
        name: 'Articulos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Articulos" */ '../views/Articulos.vue')
    },
    {
        path: '/ranking',
        name: 'Ranking',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Ranking" */ '../views/Ranking.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: '/practica2alvarokevin/',
    routes
})

export default router