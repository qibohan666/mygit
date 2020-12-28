<template>
    <div class="computed">
        <span>购物车</span>
        <div class="main">
            <div class="item" v-for="i in foodlist" :key="i.id">
                <input :value="i.id" type="checkbox" v-model="ary">
                <div>{{i.name}}</div>
                <div>{{i.price}}</div>
                <div class="control">
                    <div @click="sub(i.id)">-</div>
                    {{i.count}}
                    <div @click="add(i.id)">+</div>
                </div>
            </div>
            <div>总金额：{{sumprice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            foodlist:[
                {id:1,name:'香辣虾',price:'48.00',count:1},
                {id:2,name:'水煮鱼',price:'54.00',count:1},
                {id:3,name:'面包蟹',price:'96.00',count:1},
                {id:4,name:'馋嘴牛蛙',price:'98.00',count:1},
                {id:5,name:'铁板鱿鱼',price:'64.00',count:1}

            ],
            ary:[]
        };
    },
    computed: {
        sumprice(){
            let sum=0
            let that=this
            this.ary.forEach(e => {
               let item=that.foodlist.find(i=>i.id==e)
               sum+=item.price*item.count
            });
            return sum+'.00'
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        sub(id){
           let item=this.foodlist.find(i=>i.id==id)
           
           if(item.count==1){
               let index=this.ary.findIndex(i=>i==id)
               this.ary.splice(index,1)

           }else if(item.count<=0){
               return false
           }
          item.count--
        },
        add(id){
           let item=this.foodlist.find(i=>i.id==id)
           item.count++
        }
    },
    components: {

    },
};
</script>

<style lang="less" >
    .main{
        width: 400px;
        border: 1px solid black;
        margin: 0 auto;
        padding: 20px;
        .item{
            display: flex;
            justify-content: space-between;
            border: 1px solid black;
            padding: 20px;
            .control{
                display: flex;
                align-items: center;
                div{
                    width: 20px;
                    height: 20px;
                    border: 1px solid black;
                }
            }
        }
    }
</style>
