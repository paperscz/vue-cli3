import Axios from  'axios'

// VUE_APP_URL_ACT这里是接口的域名
let newAxios=Axios.create({
	baseURL:process.env.VUE_APP_URL_ACT,
  timeout: 1000 * 30,
	headers: {
	  'Content-Type': 'application/json; charset=utf-8',
	  // 'Authorization': 'Authorization',
	  // 'city-id': 'cityId'
	}
})


let HTTP = (type, url, params, config = {}) => {
  let args = [url, params, config].filter(x => Boolean(x))
  return newAxios[type](...args)
}

export default {
  get: HTTP.bind(null, 'get'),
  post: HTTP.bind(null, 'post'),
  put: HTTP.bind(null, 'put'),
  delete: HTTP.bind(null, 'delete')
}