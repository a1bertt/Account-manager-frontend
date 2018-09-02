import Vue from 'vue'
import Router from 'vue-router'
import NavigationBar from '@/components/NavigationBar'
import Add from '@/components/Add'
import Display from '@/components/Display'
import HelloWorld from '@/components/HelloWorld'


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
    }
  ]
})
