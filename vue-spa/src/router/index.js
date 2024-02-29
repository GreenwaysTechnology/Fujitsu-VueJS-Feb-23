import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import UsersMasterView from '../views/UsersMasterView.vue'
import UsersDetailsView from '../views/UsersDetailsView.vue'
import MoviesView from '../views/MoviesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },

    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //async component
      component: () => import('../views/AboutView.vue')
    }, {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersMasterView
    },
    {
      path: '/details/:id',
      name: 'details',
      component: UsersDetailsView
    },
    {
      path: '/movies',
      name: 'movies',
      component: MoviesView,
      children: [
        {
          path: '',
          redirect: {
            name: 'action'
          }
        },
        {
          path: 'action',
          name: 'action',
          component: () => import('../views/ActionMovie.vue')
        },
        {
          path: 'horror',
          name: 'horror',
          component: () => import('../views/HorrorMovie.vue')
        }
      ]
    }
  ]
})

export default router
