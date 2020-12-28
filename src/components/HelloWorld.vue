<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="to" @click="toMyList()">黑魔导赛top24</div>
    <div class="to" @click="toViewbind()">数据双向绑定组件</div>
    <div class="to" @click="toRichtext()">富文本组件</div>
    <div class="to" @click="topage('/Instructions')">常用指令</div>
    <div class="to" @click="topage('/Event')">事件处理</div>
    <div class="to" @click="topage('/Filter')">过滤器</div>
    <div class="to" @click="topage('/Computed')">计算属性</div>

    <div>
      <span>{{ count }}</span>
      <button @click="countAdd()">count++</button>
    </div>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到齐博涵的vue项目',
      count:0
    }
  },
  beforeCreate(){
    console.log('beforeCreate',this.count);
    /*
      此时this.count值为undefined，说明在beforeCreate阶段data还没有挂载在vue实例上。
    */
  },
  created(){
    // Vue在哪个生命周期阶段调用异步请求最佳
    //     异步请求在哪个阶段都可以调用，因为会先执行完生命周期的钩子函数之后，才会执行异步函数，
    //     但如果考虑用户体验方面的话，在created中调用异步请求最佳，用户就越早感知页面的已加载，
    //     毕竟越早获取数据，在mounted实例挂载的时候就越及时。
    console.log('created',this.count);
    this.$axios.get('/api/home/goodsList',{
      params:{
      }
    }).then(res=>{
      console.log('请求成功',res);
    }).catch(reason=>{
      console.log('请求失败',reason);
    })

  },
  beforeMount(){
    console.log('beforeMount',this.count);
  },
  mounted(){
    console.log('mounted',this.count);
  },
  beforeUpdate(){
    console.log('beforeUpdate',this.count);
  },
  updated(){
    console.log('updated',this.count);
  },
  beforeDestroy(){
    console.log('beforeDestroy',this.count);
  },
  destroyed(){
    console.log('destroyed',this.count);
  },
  methods:{
    toMyList(){
      this.$router.push({path:'/MyList'})
    },
    toViewbind(){
      this.$router.push({path:'/Viewbind'})
    },
    toRichtext(){
      this.$router.push({path:'/Richtext'})
    },
    topage(str){
      this.$router.push({path:str})
    },
    countAdd(){
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  .to{
    background: red;
    width: 200px;
    margin: 20px auto;
  }
  .to:hover{
    background: skyblue;
  }
}
</style>
