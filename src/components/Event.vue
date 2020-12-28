<template>
    <!-- 
        在vue中的事件处理都是基于dom2级事件处理
        用于事件绑定的指令是v-on可以简写为@
        对于事件有各种修饰符
     -->
    <div class="Event">
        <div>
            <span>绑定点击事件</span>
            <button @click="fn1">弹出</button>
         
        </div>
        <!-- 事件绑定默认传递event对象 -->
        <div @click="fn3">事件绑定默认传递event</div>
        <!-- 此时不默认传递event -->
        <div @click="fn2(1,2)">事件绑定获取参数</div>
        <!-- $evnet来接收event对象，位置不限 -->
        <div @click="fn4(3,$event,4)">通过$evnet来任意接收event</div>
        <h1>常用修饰符</h1>
        <div>
            <p>prevent阻止a标签的默认行为</p>
            <a @click.prevent="" href="https://www.baidu.com/">百度</a>
        </div>
        <div>
            <p>stop阻止冒泡行为</p>
            <div @click="clbox" class="box">
                <div @click.stop="clinner" class="inner"></div>
            </div>
        </div>
        <div>
            <p>once使函数只执行一次</p>
            <button @click.once="fn5">执行</button>
        </div>
        <div>
            <p>self只有点击本元素才触发,不受冒泡影响</p>
            <div @click.self="clbox" class="box">
                <div @click="clinner" class="inner"></div>
            </div>
        </div>
        <div>
            <p>修饰符可以串联使用,但串联顺序有区别</p>
        </div>
        <div>
            <p>按键修饰符</p>
            <input type="text"  @keydown.enter="talk()">
        </div>
    </div>
</template>

<script>
import Button from './Button.vue';
export default {
    props: {

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
        fn1(){
            alert('点击了')
        },
        fn2(a,b){
            console.log(a,b);
        },
        fn3(e){
            console.log(e);
        },
        fn4(a,e,b){
            console.log(a,e,b);
        },
        clbox(){
            console.log('box')
        },
        clinner(){
            console.log('inner');
        },
        fn5(){
            console.log('fn5');
        },
        talk(){
            alert('talk');
        }
    },
    components: {

    },
        Button
};
</script>

<style lang="less" >
    .Event>div{
        width: 200px;
        height: 100px;
        background-color: skyblue;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .Event>div:hover{
        background: chartreuse;
    }
    .box{
        width: 60px;
        height: 60px;
        background: pink;
        .inner{
            width: 30px;
            height: 30px;
            background: crimson;
        }
    }
</style>
