import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //存储数据
    state:{
        num:1,
        price:'24.55',
        number:99.99,
        code:0,
        name:'灰流丽',
        time:'00:00',
        deck:'codetalk'
    },
    //存储同步方法
    mutations:{
        add(state,option=1){
            state.num+=option
        },
        fn(state,str){
            console.log('vuex中的mutaions的fn函数被调用,接收参数:',str);
        },
        //荷载接参
        codetalk(state,payload){
           state.code=payload.code
        },
        //对象形式接收参数
        setName(state,payload){
            state.name=payload.name
        },
        setTime(state,payload){
            state.time=payload.time
        }
    },
    //存储异步方法
    actions:{
        //content是一个与store对象映射的对象
        asyncAdd(content,option){
            setTimeout(() => {
                content.commit('add',option)
            }, 1000);
        },
        asyncFn(content,option){
            setTimeout(() => {
               console.log('调用了vuex actions的asyncfn函数');
            }, 1000);
        },
        //组合actions用promise管理
        func(){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    resolve(10)
                }, 1000);
            })
        },
        //async await形式管理异步任务
        async handle({commit,dispatch}){
            function getTime(){
                return new Promise((resolve,reject)=>{
                    setTimeout(() => {
                        resolve('10:00')
                    }, 1000);
                })
            }
            commit('setTime',{
                time:await getTime()
            })
        }
    },
    //加工state中的数据，适合同一组件多次复用
    getters:{
        pricehandle(state,getters){
            //getters用于调用getters里的其他方法
            return '价格'+getters.numberhandle
        },
        numberhandle(state){
            return Math.floor(state.number)
        }
    }
})