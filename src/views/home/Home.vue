<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        首页666
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"></home-swiper>
    <!-- 推荐 -->
    <recommend-view :recommends="recommends"></recommend-view>
    <!-- 每日好物 -->
    <feature-view></feature-view>
    <!-- tabcontrol -->
    <tab-control :titles="['流行','新款','精选']" classs="tab-control" @tabClick="tabClick"></tab-control>
    <!-- 商品展示 -->
    <!-- <goods-list :goods="goods.pop.list"></goods-list> -->
    <goods-list :goods="showGoods"></goods-list>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est praesentium, rem nihil minus dicta cum eveniet. Ipsum assumenda aliquam incidunt ullam quaerat cum sunt distinctio nulla, amet harum deleniti consequuntur?
      Blanditiis veritatis error illo mollitia inventore porro doloremque corrupti consequatur dolor, pariatur enim quod labore nobis fuga officia maxime rem modi ad tempora nisi illum quo? Molestiae assumenda nostrum dolorum.
      Enim dicta laudantium similique officiis doloribus eaque reiciendis alias hic vitae mollitia magnam nam vel provident dolorum ipsum omnis laboriosam, ipsa quos voluptatem iste ullam esse. Doloremque possimus nam repellendus.
      Necessitatibus neque nulla excepturi laboriosam voluptatem saepe cum eos incidunt, accusantium inventore ipsum architecto amet optio qui unde natus? Repellendus, minus. Est id nihil et, minus perspiciatis sequi quaerat dolorum!
      Laboriosam, quis fugit exercitationem dolore, harum fuga nesciunt expedita hic eaque omnis iure rerum deserunt unde tempore asperiores tempora voluptate consequuntur ipsum incidunt magnam perferendis nostrum voluptas! Tempora, qui ipsa?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam assumenda quo voluptates tempore corporis ratione delectus doloremque sed? Hic quidem dolor rem in. Tempora officia eos vero eaque natus qui.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum autem amet est sint. Dolores eaque facilis dicta consectetur, nostrum sequi magnam voluptas deserunt eum fuga pariatur quam assumenda ab? Rem.
      Illo labore possimus quasi facilis iure ratione unde, rerum fuga porro, repudiandae magni? Repellat aut minus perferendis officia at in porro cupiditate quam reprehenderit, aliquam reiciendis itaque iure earum. Laudantium.
      Ut dolor fugit voluptatum. Minima minus rem dolorum similique incidunt quos enim illum tenetur reiciendis eligendi, quam nihil quibusdam obcaecati deleniti corporis! Quod quam repudiandae maxime et sint temporibus deleniti.
      Dolorem ratione quo possimus blanditiis maxime adipisci odio officia sapiente exercitationem unde alias ipsa aperiam laudantium aliquam aspernatur nobis corrupti reiciendis iure velit nulla provident, consequatur culpa, maiores necessitatibus? Qui.
      Provident excepturi fuga rem alias ratione possimus nam reiciendis. Hic odio repellat ipsa architecto eius incidunt voluptatem quae blanditiis placeat molestiae dolor atque cum est consectetur molestias, provident dolore debitis?
      Harum fugiat suscipit doloribus nemo modi provident similique, commodi pariatur nulla, architecto eius repellendus ab tenetur natus dolore quibusdam deserunt nisi est delectus repudiandae illo facere? Doloremque nostrum dignissimos eligendi.
      Laborum voluptatum cumque sit necessitatibus, at quasi eveniet rem. Sunt obcaecati quos, ducimus itaque, iusto et ut totam, eum deleniti repellat cum. Dignissimos provident, veritatis dolores adipisci vero deleniti! Ea.
      Eius voluptas quibusdam impedit assumenda sequi veritatis reprehenderit dolores eum dolor accusamus, doloribus ullam illum consectetur quaerat? Ut nihil ullam architecto corrupti dignissimos distinctio perferendis, laboriosam fugiat modi optio eligendi.
      Nisi odio, expedita vero beatae eligendi doloremque? Beatae et saepe voluptas odio! Neque aspernatur nulla voluptatibus impedit, eius esse quasi explicabo iste, sunt dignissimos incidunt, sapiente eaque aliquid reprehenderit quod.
      Natus autem veniam quasi id qui ullam voluptatum aliquid nihil consectetur similique dolorem ipsum omnis non, perspiciatis eaque. Quam aut accusantium perspiciatis magnam fuga. Rem eligendi facilis animi quidem reprehenderit!
    </p>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
import {getHomeMultidata,getHomeGoods} from "network/home.js"
import HomeSwiper from "./childcomps/HomeSwiper.vue"
import RecommendView from "./childcomps/RecommendView.vue"
import FeatureView from './childcomps/FeatureView.vue'
import TabControl from "@/components/content/tabcontrol/TabControl.vue"
import GoodsList from '@/components/content/goods/GoodsList.vue'
export default {
  name: 'Home',
  components:{NavBar,HomeSwiper,RecommendView,FeatureView,TabControl, GoodsList},
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created(){
    this.getHomeMultidata()
    //获取商品
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
   /*  async getData(){
      res=await this.getHomeMultidata()
      return res
    } */
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      console.log(res)
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
    },
    //
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
      console.log(res)
      this.goods[type].list=[...this.goods[type].list,...res.data.list]
      this.goods[type].page+=1
    })
    },
    //事件方法
    tabClick(index){
      console.log(index)
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
    }
  },
  mounted () {
    
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
  .home-nav{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10;
  }
  .tab-control{
    position: sticky;
    top:44px;
    z-index:10;
  }
</style>
