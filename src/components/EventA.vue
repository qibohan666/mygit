<template>
    <div class="eventa">
        <h1>监听事件一定要在触发事件前</h1>
        <button @click="fn">传给EventB值</button>
        <h1>{{code}}</h1>
    </div>
</template>

<script>
import {EventBus} from '../event-bus.js'

export default {
    props: {

    },
    //注入全局的数据code
    inject:['code'],
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    destroyed(){
           //发送事件(触发自定义事件)
            EventBus.$emit('updata','A组件的信息')
    },
    watch: {

    },
    methods: {
        fn(){
             //路由跳转
            this.$router.push({path:'/EventB'})
            //发送事件(触发自定义事件)
            // EventBus.$emit('xxx','A组件的信息')
        }
    },
    components: {

    },
};
</script>

<style scoped >

</style>
