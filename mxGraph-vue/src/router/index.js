import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MxGraph from '@/components/MxGraph'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/mxgraph',
      name: 'mxGraph',
      component: MxGraph
    }
  ]
})
