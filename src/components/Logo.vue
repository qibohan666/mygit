<template>
    <div class="Logo">
        <img src="../assets/yugioh.jpg" alt="">
        <div>{{myName}}</div>
    </div>
</template>

<script>
export default {
    props: {
        myName:{
            type:String,
            default:'小王'
        }
    },
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
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang="less" >
    .Logo{
        width: 300px;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
</style>
