<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'App',
  //全局依赖，但是不太建议用这种方式传值
  provide:{
    code:'qbh56789'
  },
  watch:{
    '$route':function(newV,oldV){
            console.log('老路径:',oldV,'新路径:',newV);
            if(newV.path=='/Logo'){
              console.log('欢迎来到logo组件');
            }
        }
  },
  mounted(){
    console.log('当前项目是否运行在服务器：',this.$isServer);
    console.log('set:',this.$set);
    //$set用于实例创建后，添加新属性到实例，页面再次渲染时使用，其本质是Vue.set的别名
    console.log(this.$set===Vue.set);
    //$delete用于实例创建后，删除属性，页面再次渲染时使用，其本质是Vue.delete的别名
    console.log(this.$delete===Vue.delete);
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
