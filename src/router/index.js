import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import archives from '@/components/archives'
import about from '@/components/about'
import link from '@/components/link'
import classify from '@/components/classify'
import resume from '@/components/resume'
import home from '@/components/home'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: home
        },
        {
          path: 'home',
          redirect: '/'
        },
        {
          path: 'archives',
          component: archives
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'about',
          component: about
        },
        {
          path: 'link',
          component: link
        }
      ]
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
