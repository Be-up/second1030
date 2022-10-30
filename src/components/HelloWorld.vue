<template>
  <div class="hello">
   <h2>HelloWord!!!</h2>
   <hr/>
  <div>
    <slot name='left'><span>左边</span></slot>
    <slot name="center" :hdata="hdata"><span>中间</span></slot>
    <slot name="right"><span>右边</span></slot>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    
  },
  data(){
    return {
      hdata:{
        id:100,
        name:"张三"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
