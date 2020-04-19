import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// const baseURL = 'https://localhost:9090'
// const baseURL = 'https://istudy.group:8843'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
      config.headers['Accept'] = 'application/json'
      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  error => {
    // do something with request error
    console.log('---request use:', error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor 如果请求报错网络错误，https 注意是否是浏览器拦截了
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('---request res:', res)
    return res
  },
  error => {
    console.log('--- request err:' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
