<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <span class="iconfont icon-shouye"></span> -->
        <!-- <p>首页</p> -->
        <div v-if="!flag"><slot name="item-icon" :dataIcon="dataIcon"></slot></div>
        <div v-else><slot name="item-icon-active" :dataIcon="dataIcon"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        <!-- <div :class="{active:flag}"><slot name="item-text"></slot></div> -->
    </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
        type:String,
        default:'red'
    }
  },
  data() {
    return {
      dataIcon:
      [
        {
            s:'iconfont icon-shouye',
            f:'iconfont icon-fenlei',
            g:'iconfont icon-gouwuche',
            w:'iconfont icon-wode'
        },
        {
            s:'iconfont icon-shouye-shouye',
            f:'iconfont icon-yingyongzhongxin',
            g:'iconfont icon-gouwucheman',
            w:'iconfont icon-wode-wode'
        }
      ]
        // flag:false
    };
  },
  computed:{
    flag(){
        // return this.$route.path.indexOf(this.path) !==-1
        return this.$route.path===this.path
    },
    activeStyle(){
        return this.flag ? {color:this.activeColor} :{}
    }
  },
  components: {},
  methods: {
    itemClick(){
        console.log("666")
        /* if(this.path==='/home'){
            this.dataIcon.s='iconfont icon-shouye-shouye'
            this.flag=true
        }
        else if(this.path==='/category'){
            this.dataIcon.f='iconfont icon-yingyongzhongxin'
            this.flag=true
        }
        else if(this.path==='/cart'){
            this.dataIcon.g='iconfont icon-gouwucheman'
            this.flag=true
        }
        else if(this.path==='/profile'){
            this.dataIcon.w='iconfont icon-wode-wode'
            this.flag=true
        } */
        this.$router.push({
            path:this.path,
            // query: {v: Math.floor(Math.random()*100)}
        })
    }
  },
};
</script>

<style>
.iconfont.icon-fenxiang {
  color: #bfa;
  font-size: 50px;
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  /* height:49px; */
}
.active{
    color: pink;
}
</style>
