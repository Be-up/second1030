<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: '',
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
.nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.2);
    /* justify-content: space-between; */
    /* justify-content: center; */
}
.left,.right{
    width: 60px;
    /* background-color: pink; */
}
.center{
    /* background-color: #bfa; */
    flex: 1;
}
</style>
