<template>
    <div class="Instructions">
        <div class="text" v-text="text"></div>
        <div class="html" v-html="html"></div>
        <div v-for="(item,index) in ary" :key="item.id">{{item.name}}是第{{index+1}}个成员</div>
        <div :class="flag?'cb':'cr'">游戏王</div>
        <div v-cloak>{{aaa}}</div>
        <div v-once>count:{{count}}</div>
        <button @click="count++">add</button>
        <div v-pre>pre:{{pre}}</div>
        <div v-if="status==1">status1</div>
        <div v-else-if="status==2">status2</div>
        <div v-else>status3</div>
        <button @click="status++">status++</button>
        <div class="showbox" style="border:1px solid black;">
            <div style="width:100%;height:50px;background:red;">
                <div v-show="isShow">我是否会隐藏</div>
            </div>
            <button @click="isShow=!isShow">显隐</button>
        </div>
        <label for="inp">{{value}}</label>
        <input name="inp" type="text" v-model="value">
        <div class="showbox" style="border:1px solid black;">
            <span>复选框</span>
            <input type="checkbox" name="" id="" v-model="arr" value="1">
            <input type="checkbox" name="" id="" v-model="arr" value="2">
            <input type="checkbox" name="" id="" v-model="arr" value="3">
            <button @click="fn">查看arr</button>
        </div>
        <div class="showbox" style="border:1px solid black;">
            <span>单选框</span>
            <input type="radio" value="man" v-model="x">
            <input type="radio" value="woman" v-model="x">
            <button @click="func">查看x</button>
        </div>
        <div>您选择的美食{{food}}</div>
        <select v-model="food">
            <option value="香辣虾">香辣虾</option>
            <option value="水煮鱼">水煮鱼</option>
            <option value="馋嘴牛蛙">馋嘴牛蛙</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            text:'我是文本',
            html:'<a href="#">我是a标签</a>',
            ary:[
                    {name:'qbh',id:'01'},
                    {name:'ljq',id:'02'},
                    {name:'ztq',id:'03'}
                ],
            flag:true,
            aaa:'cloak',
            count:0,
            pre:'123',
            status:1,
            isShow:true,
            value:'',
            arr:[],
            x:null,
            food:'馋嘴牛蛙'
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
            console.log(this.arr);
        },
        func(){
            console.log(this.x);
        }
    },
    components: {

    },
};
</script>

<style lang="less" >
*{
    padding: 0;
    margin: 0;
}
.Instructions>div{
        width: 300px;
        margin: 10px;
    }
.Instructions{
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .text{
         background: red;
         
    }
    .html{
        background: chartreuse;
    }
    .cb{
        font-weight: bold;
        color: blue;
    }
    .cr{
        font-weight: bold;
        color: red;
    }
}
    [v-cloak]{
        display: none;
    }
</style>
