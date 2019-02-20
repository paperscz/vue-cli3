import http from 'utils/httpRequest'
let {post}=http


export const getData = params => {
	return post( `这里写接口链接`, params) 
}
