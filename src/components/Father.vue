<template>
    <div class="father">
        <child ref="child" :code='mycode' :datas='datas' @click="fn"></child>
    </div>
</template>

<script>
import Child from '@/components/Child'
export default {
    props: {

    },
    data() {
        return {
            mycode:'歪比歪比',
            datas:{
                name:'sfds',
                age:20,
                city:'dfds'
            }
        };
    },
    computed: {

    },
    created() {
    },
    mounted() {
        //注意要在第一次渲染后进行，否则不能获取组件实例

        //$refs用来获取当前页面所有注册ref属性元素的集合，如果是组件注册的，那么会获取当前组件的实例,可以借此改变子组件的值
        console.log('refs',this.$refs);
        console.log(this.$refs.child.inner);
        // this.$refs.child.inner='woshizizujian'

        //$children用来获取当前页面所有子组件的实例
        console.log('children',this.$children);
    },
    watch: {

    },
    methods: {
       fn(){
           console.log('kkk');
       }
    },
    components: {
        Child
    },
};
</script>

<style scoped >

</style>
