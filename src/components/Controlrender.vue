<template>
    <div class="Controlrender">
        <h1>动态渲染类和样式的几种方法</h1>
        <p>1.对象处理方式，写在结构上 :class='{xxx:xx}'</p>
        <div :class="{'box':isbox,'inner':isinner}">测试文字1</div>
        <p>2.对象处理方式，把响应数据写在data上 :class='obj'</p>
        <div :class="obj">测试文字2</div>
        <p>3.对象处理方式，把响应数据写在computed上 :class='obj'(适合那种复杂判断的时候)</p>
        <div :class="classObj">测试文字3</div>
        <p>4.数组处理方式，把响应数据写在data上，判断数据的值有无对应类来决定是否有这个类</p>
        <div :class="[classBox,classInner,classWrap]">测试文字4</div>
        <p>5.数组处理方式，使用三目运算符</p>
        <div :class="[isbox?'box':'']" class="inner">测试文字5</div>
        <p>6.数组处理方式，数组中使用对象</p>
        <div :class="[obj,classContent]" >测试文字6</div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            isbox:true,
            isinner:true,
            obj:{
                box:true,
                inner:true
            },
            classBox:'box',
            classInner:'inner',
            classWrap:null,
            classContent:'content'
        };
    },
    computed: {
        classObj(){
            return{
                box:this.isbox,
                inner:this.isinner
            }
        }
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

<style scoped >
    .box{
        font-weight: bold;
        font-size: 40px;
        color: turquoise;
    }
    .inner{
        margin: 0 auto;
        width: 400px;
        background: blueviolet;
        border: 1px solid springgreen;
    }
    .content{
        border-radius: 10px;
    }
</style>
