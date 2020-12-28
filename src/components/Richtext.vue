<template>
    <div class="Richtext">
        <div contenteditable="true">这是富文本组件</div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    beforeCreate(){
        console.log('子组件的beforeCreate');
    },
    created() {
        console.log('子组件的created');
    },
    beforeMount(){
        console.log('子组件的beforeMount');
    },
    mounted() {
        console.log('子组件的mounted');
    },
    beforeUpdate(){
        console.log('子组件的beforeUpdate');
    },
    updated(){
        console.log('子组件的updated');
    },
    beforeDestroy(){
        console.log('子组件的beforeDestroy');
    },
    destroyed(){
        console.log('子组件的destroyed');
    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang="less">

</style>
