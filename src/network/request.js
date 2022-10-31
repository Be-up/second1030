import axios from "axios"

/* export function request(config,success,failure){
    //创建axios实例
    const newInstance= axios.create({
        baseURL:'http://666:80000',
        timeout:5000
    })
    //使用实例发送请求
    newInstance(config).then(res=>{
        success(res)
    }).catch(err=>{
        failure(err)
    })
} */

/* export function request(config){
    //创建axios实例
    const newInstance= axios.create({
        baseURL:'http://666:8000',
        timeout:5000
    })
    //使用实例发送请求
    newInstance(config.baseUrl).then(res=>{
        config.success(res)
    }).catch(err=>{
        config.failure(err)
    })
} */

/* export function request(config){
    return new Promise((resolve,reject)=>{
        const newInstance=axios.create({
            // baseURL:'http://666:8000',
            baseURL:'http://666/api/hy66',
            timeout:5000
        })
        newInstance(config).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
} */

export function request(config){
        const newInstance=axios.create({
            // baseURL:'http://666:8000',
            baseURL:'http://666/api/hy66',
            timeout:5000
        })
        //请求响应拦截器
        newInstance.interceptors.request.use(config=>{
            return config
            // return new Error('错错')
        },err=>{
            console.log(err)
            return new Promise(()=>{})
        }
        )
        newInstance.interceptors.response.use(res=>{
            return res
        },err=>{
            return new Promise(()=>{})
        }
        )
        return newInstance(config)
}