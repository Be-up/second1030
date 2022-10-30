import Vue from "vue"
import VueRouter from "vue-router"
//
const Home=()=>import('../views/home/Home.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const CateGory=()=>import('../views/category/CateGory.vue')
const ProFile=()=>import('../views/profile/ProFile.vue')
Vue.use(VueRouter)

const routes=[
   {
    path:'/',
    redirect:'/home'
   },
   {
    path:'/home',
    name:'home',
    component:Home
   },
   {
    path:'/cart',
    name:'cart',
    component:Cart
   },
   {
    path:'/category',
    name:'category',
    component:CateGory
   },
   {
    path:'/profile',
    name:'profile',
    component:ProFile
   }
   
]

const router = new VueRouter({
    routes,
    // linkActiveClass:'active'
})
/* router.afterEach((to,from)=>{
    console.log(to,"全局后置666")
    document.title=to.meta.title
})
router.beforeEach((to,from,next)=>{
console.log(to,'全局前置999')
next()
}) */
//
router.onError(err=>{
    console.log(err)
})
//
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
