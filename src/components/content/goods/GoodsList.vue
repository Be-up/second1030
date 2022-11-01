<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="item.iid" :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  components: { GoodsListItem },
  name: 'GoodsList',
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
      
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    /* align-content:space-between; */
  }
</style>
