import Vue from "vue"
import vuex from "vuex"

Vue.use(vuex)
const store=new vuex.Store({
    state:{
        sum:0
    },
    mutations:{
        add(state,value){
            console.log(value)
            // return Promise.resolve("操作成功~~~~")不行
        }
    },
    actions:{
       /*  Add(context,value){
           context.commit('add',value)
            return Promise.resolve("操作成功了！！！666")
        } */
        Add(context,value){
             return new Promise((resolve,reject)=>{
                context.commit('add',value)
                resolve("操作成功了！！！666")
             })
         }
    }
})
export default store