import axios from 'axios'
const AUTH_TOKEN = `Bearer ${'sss'}`
axios.defaults.baseURL = process.env.BASE_URL || 'http://localhost:8000'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN

// 1 handle request
axios.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    console.log('Handle request', error)
    return Promise.reject(error)
  }
)

// 2 handle response
axios.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    console.error('Handle response', error)
    return Promise.reject(error)
  }
)
export default axios
