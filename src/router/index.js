import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyList from '@/components/MyList'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import InputBox from '@/components/InputBox'
import Image from '@/components/Image'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/MyList',
      name:'MyList',
      component:MyList
    },
    {
      path:'/Header',
      name:'Header',
      component:Header
    },
    {
      path:'/Logo',
      name:'Logo',
      component:Logo
    },
    {
      path:'/Button',
      name:'Button',
      component:Button
    },
    {
      path:'/InputBox',
      name:'InputBox',
      component:InputBox
    },
    {
      path:'/Image',
      name:'Image',
      component:Image
    }
  ]
})
