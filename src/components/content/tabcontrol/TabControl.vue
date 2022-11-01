<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" @click="itemClick(index)"
     :key="item" :class="{active:currentIndex===index?'active':''}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex=index
      //点击的同时改变下标
      this.$emit('tabClick',index)
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 1rem;
    height: 3rem;
    line-height: 3rem;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: var(--color-tint) 3px solid;
  }
</style>
