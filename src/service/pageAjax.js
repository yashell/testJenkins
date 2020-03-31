import axios from './axios'
import qs from 'qs' // 注意: post, put提交方式需要采用该写法: qs.stringify(params)

//全网址
export const testA = () => axios.get('/v1/platform/org/info/license/2/1')

//网址中带参数
export const testB = (systemType, id) => axios.get(`/v1/platform/org/image/list/${systemType}/${id}`)

//网址+？后的参数
export const testC = (systemType, params) => axios.get(`/v1/platform/org/unAuth/list/${systemType}`, params)

// qs.stringify()将对象 序列化成URL的形式，以&进行拼接。
export const testD = (systemType, params) => axios.get(`/v1/platform/org/unAuth/list/${systemType}`,  qs.stringify(params))


