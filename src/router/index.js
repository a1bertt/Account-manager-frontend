import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '@/components/NavigationBar'
import Add from '@/components/Add'
import Display from '@/components/Display'
import background from '@/components/background'
import edit from '@/components/edit'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/App',
      name: 'NavigationBar',
      component: NavigationBar
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Display',
      name: 'Display',
      component: Display
    },
    {
      path: '/',
      name: 'background',
      component: background
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit,
      props: true
    }
  ]
})
