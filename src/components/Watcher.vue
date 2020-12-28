<template>
    <div class="Watcher">
        <h1>监听数据变化</h1>
        <div>你的名字：{{name}}</div>
        <button @click="changeName">改变名字为zjl</button>
        <div>
            <mark>watch函数的第一个参数是更新后的数据，第二个参数是更新前的数据</mark>
        </div>
        <hr>
        <div>
            <h3>{{monster.name}}</h3>
            <div>{{monster.attribute}}</div>
            <div>
                <span>{{monster.atk}}</span>
                <span>{{monster.def}}</span>
            </div>
        </div>
        <button @click="toDark">把monster的属性变成暗属性</button>
        <button @click="toBlackDragon">把monster变成真红眼黑龙</button>
        <div>
            <mark>只有改变整个变量值才会触发watch，只改变其中的属性不会触发watch</mark>
        </div>
        <hr>
        <h3>引用类型的深度监听</h3>
        <div>{{man.name}}</div>
        <div>{{man.sex}}</div>
        <div>{{man.demon}}</div>
        <div>{{man.pet}}</div>
        <button @click="toDianci">把man的名字变成电次</button>
        <button @click="toGunDemon">把man的恶魔变成枪之恶魔</button>
        <div>
            <mark>使用深度监听对象时，如果对象属性发生变化会触发watch两个参数都返回最新的对象</mark>
            <br>
            <mark>使用深度监听对象时，如果对象整体发生变化会触发watch两个参数依次返回更新后和更新前的对象</mark>
        </div>
        <hr>
        <h3>watch实际应用</h3>
        <div>当前进度：{{v}}</div>
        <input type="range" min="0" max="100" v-model="v">
        <h3>watch还可以用来监听路由变化,在app.vue里使用watch来监听</h3>
        <router-link to="/Logo">logo</router-link>
        <hr>
        <div class="clr" :class="obj">破天巨爱</div>
        <div :class="[clr,fwb,bgb]">超雷龙-雷龙</div>
        <hr>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            name:'qbh',
            monster:{
                name:'青眼白龙',
                atk:3000,
                def:3000,
                attribute:'光'
            },
            man:{
                name:'电锯人',
                sex:'男',
                demon:'电锯恶魔',
                pet:'波奇塔'

            },
            v:0,
            text:'',
            obj:{
                fwb:true,
                bgb:true
            },
            ary:[],
            fwb:'fwb',
            bgb:'bgb',
            clr:'clr'
        };
    },
    computed: {

    },
    created() {
      
    },
    mounted() {

    },
    watch: {
        name(newV,oldV){
            console.log('老数据:',oldV,'新数据:',newV);
        },
        monster(newV,oldV){
            console.log('老数据:',oldV,'新数据:',newV);
        },
        man:{
            deep:true,
            immediate:true,
            handler(newV,oldV){
                console.log('老数据:',oldV,'新数据:',newV);
            }
        },
        v(newV,oldV){
            if(newV>50){
                console.log('大于50了')
               
            }
        }


    },
    methods: {
        changeName(){
            this.name='zjl'
        },
        toDark(){
            this.monster.attribute='暗'
        },
        toBlackDragon(){
            this.monster={
                name:'真红眼黑龙',
                atk:2400,
                def:2000,
                attribute:'暗'
            }
        },
        toDianci(){
            this.man.name='电次'
        },
        toGunDemon(){
            this.man={
                name:'光熙',
                sex:'女',
                demon:'枪之恶魔',
                pet:'玛奇玛'

            }
        }

    },
    components: {

    },
};
</script>

<style scoped lang="less">
   a{
       color: red;
   }
   .box{
       p{
           font-weight: bold;
           color: blue;
       }
   }
   hr{
       margin: 20px auto;
   }
   .clr{
       color: red;
       width: 300px;
       margin: 0 auto;
   }
   .fwb{
       font-weight: bold;
   }
   .bgb{
       background: blue;
   }
</style>
