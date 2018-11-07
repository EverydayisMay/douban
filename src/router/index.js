import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index'
import Movie from '@/components/views/movie'
import Book from '@/components/views/book'
import Broadcast from '@/components/views/broadcast'
import Group from '@/components/views/group'
import Search from '@/components/views/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
