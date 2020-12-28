<template>
    <div class="viewbind">
        <button @click="handle()">handle</button>
        <div v-for="(item,index) in ary" :key="index">{{item}}</div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            ary:[1,2,3]
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
        handle(){
            this.ary=[23,45,67]
            // this.ary.push(4)
        }
    },
    components: {

    },
};
</script>

<style scoped >

</style>
