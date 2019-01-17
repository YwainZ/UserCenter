import 'whatwg-fetch';
import queryString from 'query-string';

const base_url = 'http://59.111.95.232:30002';
const base_fetch = (api, method, data) => {
    const options = { 
        method: method,
        mode: 'cors',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
     }
    if (method === 'POST') {
        options.body = JSON.stringify(data);{name: 'key'}
    }
    if (method === 'GET' && data) {
        api = api + queryString(data)
        console.log('api', api)
    }
    const res = fetch(`${base_url}${api}`, options)
                .then(res => res.json())
                .catch(e => console.log('错误', e))
    return res;
}
// 获取所有项目
export const getAllProject = () => base_fetch('/facade/project/all', 'GET')
// 项目注册
export const registerPorject = (data) => base_fetch('/facade/project', 'POST', data)
// 获取当前项目日志
export const getLogs = (data) => base_fetch('/facade/log', 'GET', data)