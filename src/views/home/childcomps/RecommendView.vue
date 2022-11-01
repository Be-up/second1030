<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends">
        <a class="recommmend-item-a" :href="item.link">
            <img :src="item.image" alt=""/>
            <span>{{item.title}}</span>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    recommends:{
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
    .recommend{
        display:flex;
        width: 100%;
        padding:5px 5px;
        border-bottom: 5px solid #e6e6e6;
        margin:10px 0 10px;
    }
    .recommend-item{
        flex:1
    }
    .recommmend-item-a{
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
    }
    .recommend-item img{
        width: 80%;
        margin-bottom: 10px;
    }
</style>
