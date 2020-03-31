import axios from 'axios'
import Vue from 'vue'

// 全局默认配置
// 设置 POST 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 10000
axios.defaults.baseURL = ' http://localhost:8080/' // api 即vue.config.js 中配置的地址

// 配置 CORS 跨域
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

// 请求发起前拦截器
axios.interceptors.request.use(config => {
    // 全局body设置token
    /* if (Utils.getJwt().length > 0) {
        if (typeof config.data === 'string') {
            config.data += `&jwt=${Utils.getJwt()}`
        } else {
            if (config.data) {
                config.data.jwt = Utils.getJwt()
            }
        }
    } */

    // 全局的header设置token
    // config.headers['token'] = 'token'

    // 这句不能省，不然后面的请求就无法成功发起，因为读不到配置参数
    return config
}, error => {
    // 异常处理
    return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
    // 全局登录过滤，如果没有登录，直接跳转到登录 URL
    if (response.data.code === '401') {
        // 未登录
        // Vue.prototype.$Store.commit('changeStateInfo', {info: {}, isLogin: Math.random()})
        Vue.$router.replace('/Login')
        return false
    }
    // 这里返回的 response.data 是被 axios 包装过的一成，所以在这里抽取出来
    return response.data
}, error => {
    if (error.response) {
        const statusCode = parseFloat(error.response.status)
        const statusMsg = error.response.data.message
        switch (statusCode) {
        case 401:
            Vue.prototype.$Store.commit('changeStateInfo', {info: {}, isLogin: Math.random()})
            break
        case 403:
            Vue.prototype.$Store.commit('changeStateInfo', {info: {}, isLogin: Math.random()})
            break
        case 404:
        case 504:
            Vue.prototype.$message.error(`【${statusCode}】 - 服务器异常情况，请稍后刷新页面再试`)
            break
        default:
            Vue.prototype.$message.error(`【${statusCode}】 - ${statusMsg}`)
            break
        }
    } else {
        Vue.prototype.$message.error(`【${error}】 - 网络超时`)
    }

    return Promise.reject(error)
})

// 导出
export default axios
