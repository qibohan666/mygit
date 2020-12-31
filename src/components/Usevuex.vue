<template>
    <div class="usevuex">
        <h1>vuex的使用</h1>
        <mark>
            <h1>改变state的唯一办法是commit mutations</h1>
        </mark>
        <div>num:{{$store.state.num}}</div>
        <hr>
        <button @click="numadd">num++</button>
        <button @click="delayfn">delaynum++</button>
        <hr>
        <div>{{$store.getters.pricehandle}}</div>
        <div>{{$store.getters.numberhandle}}</div>

        <div class="fnbox">调用vuex state中的num:{{num}}</div>
        <div>qbh:{{qbh}}</div>
        <div class="fnbox">调用vuex getters中的numberhandle:{{numberhandle}}</div>
        <div class="fnbox" @click="fn('DREV')">调用vuex mutations中的fn</div>
        <div class="fnbox" @click="asyncFn">调用vuex action中的asyncFn</div>
        <div class="fnbox" @click="func">异步调用</div>
        <mark @click="codehandle">code:{{$store.state.code}}</mark>
        <br>
        <mark @click="setname">name:{{$store.state.name}}</mark>

        <h1>{{$store.state.time}}</h1>
        <button @click="handle">handle</button>
    </div>
</template>

<script>
//局部引入，不改名用字符串数组即可，要改名要用键值对对象
import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {
        ...mapState(['num']),
        //使用别名
        ...mapState({qbh:'num'}),
        ...mapGetters(['numberhandle'])
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        numadd(step){
            this.$store.commit('add',10)
            //大多数情况下应该采取载荷的形式提交
            //this.$store.commit('add',{step:10})
            //或者可以采用对象形式传参
        },
        delayfn(){
            this.$store.dispatch('asyncAdd',5)
        },
        codehandle(){
            //荷载形式传参
            this.$store.commit('codetalk',{code:1000})
        },
        setname(){
            //对象风格传参
            this.$store.commit({
                type:'setName',
                name:'屋敷童'
            })
        },
        //在组件中直接将mutations的方法映射在methods,注意导入，也支持传参，在调用时传入即可
        ...mapMutations(['fn']),
         //在组件中直接将actions的方法映射在methods,注意导入
        ...mapActions(['asyncFn','handle']),
        func(){
            this.$store.dispatch('func').then((value)=>{
                console.log('value:',value);
            })
        }
    },
    components: {
        
    },
};
</script>

<style scoped >
    hr{
        margin: 10px auto;
    }
    .fnbox{
        width: 200px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border:1px solid black;
        margin: 10px auto;
    }
</style>
