import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MyList from '@/components/MyList'
import Header from '@/components/Header'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import InputBox from '@/components/InputBox'
import Image from '@/components/Image'
import Viewbind from '@/components/Viewbind'
import Richtext from '@/components/Richtext'
import Instructions from '@/components/Instructions'
import Event from '@/components/Event'
import Filter from '@/components/Filter'
import Computed from '@/components/Computed'
import Watcher from '@/components/Watcher'
import Controlrender from '@/components/Controlrender'
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
    },
    {
      path:'/Viewbind',
      name:'Viewbind',
      component:Viewbind
    },{
      path:'/Richtext',
      name:'Richtext',
      component:Richtext
    },{
      path:'/Instructions',
      name:'Instructions',
      component:Instructions
    },{
      path:'/Event',
      name:'Event',
      component:Event
    },{
      path:'/Filter',
      name:'Filter',
      component:Filter
    },{
      path:'/Computed',
      name:'Computed',
      component:Computed
    },{
      path:'/Watcher',
      name:'Watcher',
      component:Watcher
    },{
      path:'/Controlrender',
      name:'Controlrender',
      component:Controlrender
    }
  ]
})
