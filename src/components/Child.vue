<template>
    <div class="child">
        {{inner}}
    </div>
</template>

<script>
export default {
    name:'child',
    props: {

    },
    data() {
        return {
            inner:'我是子组件'
        };
    },
    computed: {

    },
    created() {
        console.log(this.$attrs);
        console.log(this.$listeners);
        // let f=this.$listeners.click
        // f()
      
    },
    mounted() {
        //获取父组件实例
        console.log('parent',this.$parent);
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
