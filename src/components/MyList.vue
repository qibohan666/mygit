<template>
    <div class="MyList">
        <header>游戏王厦门黑魔导赛top24卡组统计</header>
        <Logo :myName='myName'></Logo>
        <Header :json='obj'></Header>
        <Button @receiveValue="getCard"></Button>
        <div class="flexbox">
            <span>父子组件动态传参</span>
            <input type="text" v-model="myValue">
        </div>
        <InputBox :myValue="myValue"></InputBox>
        <div class="card">
            <div>{{card.name}}</div>
            <div>ATK:{{card.ATK}}</div>
            <div>DEF:{{card.DEF}}</div>
        </div>
        <ul>
            <li class="list" v-for="(item,index) in datalist" :key="index">
                <div>卡组:{{item.name}}</div>
                <div>使用数:{{item.number}}</div>
            </li>
        </ul>
        <div id="main" style="width:500px;height:500px;" ></div>
        <button @click="getImg()">导出图片</button>
    </div>
</template>

<script>
import echarts from 'echarts'
import Logo from '@/components/Logo'
import Header from '@/components/Header'
import Button from '@/components/Button'
import InputBox from '@/components/InputBox'
export default {
    props: {

    },
    data() {
        return {
            datalist:[
                {name:'黄金国',number:5},
                {name:'调皮宝贝',number:4},
                {name:'教影召',number:3},
                {name:'电脑堺',number:2},
                {name:'十二兽',number:2},
                {name:'自奏圣乐',number:2},
                {name:'龙link',number:2},
                {name:'战华',number:2},
                {name:'ftk',number:2}
            ],
            myName:'YU-GI-OH',
            obj:{
                name:'anni',
                sex:'girl',
                age:'18'
            },
            card:{
                name:'xxx',
                ATK:0,
                DEF:0,
                attribute:'',
                level:2
            },
            myValue:'',
            myChart:null,
        };
    },
    computed: {

    },
    created() {
    },
    mounted() {
        this.$nextTick(()=>{
             this.drawPie('main')
        })
       
    },
    watch: {

    },
    methods: {
        drawPie(id){
            let that=this
            this.myChart=echarts.init(document.getElementById(id))
            let ary=[]
            this.datalist.forEach(item=>{
                let obj={
                    value:item.number,
                    name:item.name
                }
                ary.push(obj)
            })
            this.myChart.setOption({
                title: {
                    text: '游戏王黑魔导赛top24',
                    subtext: 'ocg 2020/10/1',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: that.datalist.map(item=>item)
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data:ary,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            })
        },
        getCard(card){
            this.card=card
        },
        getImg(){
            let url=this.myChart.getDataURL({
                pixelRatio: 2,
                backgroundColor: '#fff'
            });
            console.log(url);
            this.$router.push({path:'/Image',query:{url}})
        }
    },
    components:{
        Logo,
        Header,
        Button,
        InputBox
    }
    
};
</script>

<style lang="less">
.MyList{
    ul{
        width: 300px;
        margin: 0 auto;
        .list{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid black;
            padding: 10px;
            margin: 20px;
        }
    }
    #main{
        margin: 0 auto;
    }
    .flexbox{
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }
}
    
</style>
