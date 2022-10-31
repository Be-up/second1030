<template>
  <tab-bar>
      <tab-bar-item path="/home" activeColor="pink">
        <template v-slot:item-icon="{dataIcon}">
          <span :class="dataIcon[0].s"></span>
        </template>
        <template v-slot:item-icon-active="{dataIcon}">
          <span :class="dataIcon[1].s"></span>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <!--  -->
      <tab-bar-item path="/category" activeColor="#057aee">
        <template v-slot:item-icon="{dataIcon}">
          <span :class="dataIcon[0].f"></span>
        </template>
        <template v-slot:item-icon-active="{dataIcon}">
          <span :class="dataIcon[1].f"></span>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <!--  -->
      <tab-bar-item path="/cart" activeColor="#41ba84">
        <template v-slot:item-icon="{dataIcon}">
          <span :class="dataIcon[0].g"></span>
        </template>
        <template v-slot:item-icon-active="{dataIcon}">
          <span :class="dataIcon[1].g"></span>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <!--  -->
      <tab-bar-item path="/profile">
        <template v-slot:item-icon="{dataIcon}">
          <span :class="dataIcon[0].w"></span>
        </template>
        <template v-slot:item-icon-active="{dataIcon}">
          <span :class="dataIcon[1].w"></span>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue';
import TabBarItem from '@/components/tabbar/TabBarItem.vue';
export default {
    name: '',
    components: {TabBar,TabBarItem},
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
