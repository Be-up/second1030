import {request,requestGoods} from "./request"

export function getHomeMultidata(){
    return request({
        method:'Get',
        url:'/home/multidata'
    })
}
//获取商品展示
export function getHomeGoods(type,page){
    return requestGoods({
        method:'Get',
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
