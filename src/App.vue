<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
  <router-view/>
  <!-- <p><button @click="send">点击发送数据</button></p> -->
  <!-- <p><button @click="sendM">点击发送Commit数据</button></p> -->
  <!-- <h1>666</h1> -->
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTabbar/MainTabBar.vue"
export default {
  name: "App",
  data() {
    return {
      active: "",
    };
  },
  components: {MainTabBar},
  methods: {
    send(){
      // this.$store.dispatch('Add',"hello")
      this.$store.dispatch({
        type:'Add',
        name:'张三',
        id:'100',
        obj:{
          title:'标题'
        }
      }).then(res=>{
        console.log(res)
      })
    },
    sendM(){
      this.$store.commit("add",100).then(res=>{console.log(res)})
    }
  },
};
</script>

<style>
/* @import '@/assets/static/css/base.css' */
@import 'assets/css/base.css'
</style>
