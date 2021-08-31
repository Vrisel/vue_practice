import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/components/HelloWorld.vue'
import Tarot from '@/components/Tarot.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/tarot',
      name: 'Tarot',
      component: Tarot
    }
  ],
  mode: 'history'
});