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
import Lifecycle from '@/components/Lifecycle'
import Usevuex from '@/components/Usevuex'
import EventA from '@/components/EventA'
import EventB from '@/components/EventB'
import Father from '@/components/Father'
import Child from '@/components/Child'

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
    },{
      path:'/Lifecycle',
      name:'Lifecycle',
      component:Lifecycle
    },{
      path:'/Usevuex',
      name:'Usevuex',
      component:Usevuex
    },{
      path:'/EventA',
      name:'EventA',
      component:EventA
    },{
      path:'/EventB',
      name:'EventB',
      component:EventB
    },{
      path:'/Father',
      name:'Father',
      component:Father
    },{
      path:'/Child',
      name:'Child',
      component:Child
    }
  ]
})
