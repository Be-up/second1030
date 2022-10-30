<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: "",
    };
  },

  components: {},
  methods: {},
};
</script>

<style>
*{
  margin:0;
  padding:0;
}
.iconfont.icon-fenxiang {
  color: #bfa;
  font-size: 50px;
}
.tab-bar{
  height: 49px;
  display:flex;
  justify-content: center;
  /* align-items: center; */
  background-color: #f6f6f6;
  box-shadow: 0 -2px 2px rgba(100,100,100,0.1);
  position:fixed;
  left: 0;
  right:0;
  bottom:0;
}
</style>
