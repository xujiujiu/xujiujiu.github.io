import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import archives from '@/components/archives'
import about from '@/components/about'
import link from '@/components/link'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: HelloWorld
    },
    {
      path: '/archives',
      name: 'Archives',
      component: archives
    },
    {
      path: '/about',
      name: 'About',
      component: about
    },
    {
      path: '/link',
      name: 'Link',
      component: link
    }
  ]
})
