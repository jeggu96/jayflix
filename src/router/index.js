import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const MoviesView = () => import(/* webpackChunkName: "movies" */ '../views/MoviesView.vue');
const TamilMoviesView = () => import(/* webpackChunkName: "tamilmovies" */ '../views/TamilMoviesView.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MoviesView
  },
  {
    path: '/tv',
    name: 'tv',
    component: MoviesView
  },
  {
    path: '/movies/tamil',
    name: 'movies_tamil',
    component: TamilMoviesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
