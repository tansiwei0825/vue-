 import axios from 'axios'
 import qs from 'qs'
const get=(url,data={})=>{
    return new Promise((resolve,reject)=>{
        axios.get(url,{
          params:data
        }).then((response)=>{
          resolve(response.data)
        },(err)=>{
            reject(err)
        })
    })
}

const post=(url,data={})=>{
    return new Promise((resolve,reject)=>{
        axios.post(url,qs.qs.stringify(data))
        .then((response)=>{
          resolve(response.data)
        },(err)=>{
            rejece(err)
        })
    })
}

export default{
    get:get,
    post:post
}
