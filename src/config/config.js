import 'whatwg-fetch';

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
        options.body = JSON.stringify(data);
    }
    if (method === 'GET' && data) {
        let params = ''
        for(const item in data) {
            params += '&' + item + '=' + data[item]
        }
        api = api + '?' + params.slice(1, params.length)
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
// 获取用户信息
export const getUserInfo = (data) => base_fetch('/facade/user/project', 'GET', data)