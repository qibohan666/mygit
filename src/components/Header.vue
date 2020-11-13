<template>
    <div class="Header" @click="fn()">
        我是{{json.name}},我是一名{{json.sex}},我今年{{json.age}}
    </div>
</template>

<script>
export default {
    name:'Header',
    props: {
        json:{
            type:Object,
            default:{
                name:'xxx',
                sex:'boy',
                age:18
            }
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
        fn(){
            console.log('click');
        }
    },
    components: {

    },
};
</script>

<style lang="less">
    .Header{
        width: 300px;
        height: 50px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background:#1e1e1e;
        color: skyblue;
        box-shadow: 0 0 1px 1px aqua;
    }
    .Header:hover{
        background:chartreuse;
    }
</style>
