<template>
    <div class="eventb">
        <h1>从EventA接收的参数：{{value}}</h1>  
    </div>
</template>

<script>
import { EventBus } from '../event-bus.js'
export default {
    props: {

    },
    data() {
        return {
            value:1
        };
    },
    computed: {

    },
    created() {
       //接收事件(监听自定义事件)
        EventBus.$on('updata',(msg)=>{
            console.log('接收',msg);
            this.value=msg
        })
    },
    mounted() {
        //接收事件(监听自定义事件)
        // EventBus.$on('updata',(msg)=>{
        //     console.log('接收',msg);
        //     this.value=msg
        // })
    },
    deactivated(){
        //页面卸载移除监听
        EventBus.$off('updata')
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped >

</style>
