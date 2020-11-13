<template>
    <div class="Button">
        <button @click="PassValue()">父组件传值</button>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            card:{
                name:'青眼白龙',
                ATK:3000,
                DEF:2500,
                attribute:'光',
                level:8
            }
        };
    },
    computed: {

    },
    created() {
        this.PassValue()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        PassValue(){
            this.$emit('receiveValue',this.card)
        }
    },
    components: {

    },
};
</script>

<style scoped >

</style>
