<template>
    <div class="Filter">
        <div style="color:red;">
            <span class="bignum">{{price | peicehandle('big')}}</span>
            <span class="minnum">.{{price | peicehandle('min')}}</span>
        </div>
        <div>
            <span>过滤器串联使用</span>
            <div>
                <span>{{info}}</span>
                <h3>过滤出电话并加密</h3>
                <span>{{info | infoFilter1 | infoFilter2}}</span>
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
            price:12.98,
            info:'您收到了来自19943582979的来电'
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

    },
    components: {

    },
    //定义局部过滤器
    filters:{
        peicehandle(price,type){
            let str=''+price
            let ary=str.split('.')
            let bignum=ary[0]
            let minnum=ary[1]
            if(type=='big'){
                return bignum
            }else if(type=='min'){
                return minnum
            }
        },
        infoFilter1(str){
            let reg=/\d+/g
            let phone=str.match(reg)[0]
            return phone
        },
        infoFilter2(str){
             let ary=str.split('')
            ary.splice(3,4,'****')
            let newphone=ary.join('')
            return newphone
        }
    }
};
</script>

<style lang="less" >
    .Filter>div{
        border: 1px solid black;
        width: 300px;
        height: 100px;
        margin: 10px auto;
    }
    .Filter{
        .bignum{
            font-size: 34px;
        }
        .minnum{
            font-size: 24px;
        }
    }
</style>
