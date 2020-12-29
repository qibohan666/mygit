<template>
    <div class="Lifecycle">
        <img class="lifecycleimg" src="../assets/lifecycle.png" alt="">
        <div class="word">
            <h1>生命周期详解</h1>
            <p>first:{{first}}</p>
            <button @click="fn">更新数据</button>
            <div>
                <mark>创建组件实例阶段:</mark>
                beforeCreate
                <section>
                    1.new Vue开始---->创建实例，让实例完成双向处理操作
                    <br>
                    2.初始化事件和生命周期管控
                    <br>
                    3.beforeCreate
                    <p>作用时期：实例创建之前</p>
                    <p>应用：信息的判断,loading提示操作，然后在created阶段清除</p>
                    4.初始化data、methods、filter...等数据的初始化
                </section>
            </div>
            <div>
                <mark>编译阶段:</mark>
                created、beforeMount
                <section>
                    5.created(使用频率非常高)
                    <p>作用时期：实例创建完成,data、methods已经挂载</p>
                    <p>应用：发送请求获取数据(请求是异步的，如果在渲染时请求，会导致第一次渲染无数据)</p>
                    6.是否指定了el
                    <p>yes--->查找是否指定了template(组件使用template)</p>
                        <p style="padding-left:80px;font-weight:400;">yes--->将template编译到render函数中</p>
                        <p style="padding-left:80px;font-weight:400;">no--->将el外部的HTML，作为template编译</p>
                    <p>no--->查找是否执行vm.$mount(el)函数</p>
                        <p style="padding-left:80px;font-weight:400;">yes--->相当于指定了el</p>
                    7.beforeMount
                    <p>作用时期：第一次渲染dom前：此时还没有dom</p>
                    <p>应用：一般没什么用，也可以用来发送请求、更改数据</p>
                </section>
            </div>
            <div>
                <mark>第一次渲染完成:</mark>
                mounted
                <section>
                    8.把templa编译(生成虚拟dom) 原理：基于vue-template-loader插件，也是基于webpack处理。
                    9.把虚拟dom变成真实dom(dom diff算法)
                    <br>
                    10.mounted
                    <p>作用时期：第一次渲染dom前h后：真实dom渲染完</p>
                    <p>应用：dom处理和监听</p>
                </section>
            </div>
            <div>
                <mark>data修改时：</mark>
                beforeUpdate、updated(如果只改变data的值，而不渲染，则不会触发这两个钩子函数)
                <section>
                    11.beforeUpdate
                        <p>作用时期：新数据渲染之前</p>
                        <p>应用：一般也没什么用</p>
                    12.重新生成虚拟dom
                    <p>1.拿本次生成的虚拟dom与上一次的虚拟dom进行比较(深度优先原则)</p>
                    <p>2.将本次与上次不一样的地方生成补丁包(dom diff)</p>
                    <p>3.把这些补丁生成真实dom，放在页面重新渲染</p>
                     13.updated
                        <p>作用时期：新数据渲染之后</p>
                        <p>应用：不要在此阶段修改响应数据，容易造成死循环</p>
                </section>
            </div>
            <div>
                <mark>组件实例销毁:</mark>
                beforeDestroy、destroyed
                <section>
                    14.beforeDestroy
                        <p>作用时期：销毁之前</p>
                        <p>应用：能够进行操作的最后机会</p>
                    15.页面销毁，挂载的东西全部消失
                    16.destroyed
                        <p>作用时期：销毁之后</p>
                        <p>应用：基本什么都不做</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            first:1000
        };
    },
    computed: {

    },
    beforeCreate(){
        console.dir(this);
        console.log('first' in this);
        console.log(this.first);
    },
    created() {
        console.log(this);
        console.log('first' in this);
        console.log(this.first);
    },
    beforeMount(){
        // console.log(this);
        // console.log(this.first);
    },
    mounted() {
        // console.log(this);
        // console.log(this.first);
    },
    beforeUpdate(){
        // console.log(this);
        // console.log(this.first);
    },
    updated(){
        // console.log(this);
        // console.log(this.first);
    },
    beforeDestroy(){
        // console.log(this);
        // console.log(this.first);
    },
    destroyed(){
        // console.log(this);
        // console.log(this.first);
    },
    watch: {

    },
    methods: {
        fn(){
            this.first=2000
            console.log(this.first);
        }
    },
    components: {

    },
};
</script>

<style scoped >
    .Lifecycle{
        display: flex;
        justify-content: center;
    }
    p{
        padding-left: 30px;
    }
    .Lifecycle .lifecycleimg{
        width: 600px;
        height: 1520px;
    }
    .Lifecycle .word>div{
        width: 600px;
        text-align: left;
        margin: 10px auto;
        padding: 10px;
        border: 1px solid black;
        font-weight: bold;
        line-height: 40px;
    }
</style>
