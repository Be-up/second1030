<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <div class="goods-info-twospan">
        <span class="price">{{goodsItem.price}}</span>
        <div class="img-span">
        <img src="~assets/shoucang.svg">
        <span class="collect">{{goodsItem.cfav}}</span>
        </div>
        </div>
       <!-- <img src="~assets/shoucang.svg"/> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.goods-item{
    width: 48%;
    height:310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
.goods-item img{
   width: 100%; 
   border-radius: 2%;
}
.goods-info{
    /* position: relative; */
}
.goods-info p{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 3px;
}
.goods-info-twospan{
    display: flex;
    justify-content: center;
}
.goods-info-twospan .price{
     color:#bfa;
     /* flex: 1; */
}
.img-span{
    display: flex;
    justify-content: center;
    padding-left: 1rem;
}
.goods-info-twospan img{
     /* color:#bfa; */
     width: 1rem;
     height:1rem;
     /* flex: 0.1; */
     /* flex-shrink: 5; */
     /* position: absolute; */
     /* right:35%; */
}
/* .goods-info-twospan .collect::before{
     content: '';
    position: absolute;
    position: relative;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    font-size: 50px;
    color: red;
    background: url("~assets/shoucang.svg") 0 0/14px 14px;
    background: url("~assets/logo.png") 0 0/14px 14px;
} */
</style>
