import "whatwg-fetch";

const base_url = "http://usercenter.stalary.com";
const projectId = localStorage.getItem("projectId");
const key = localStorage.getItem("key");
const base_fetch = (api, method, data, isForm) => {
  const options = {
    method: method,
    mode: "cors",
    credentials: "include",
    headers: {
      "content-type": isForm
        ? "application/x-www-form-urlencoded"
        : "application/json"
    }
  };
  if (method === "POST") {
    if (isForm) {
      let params = "";
      if (data && Object.keys(data).length > 0) {
        for (const item in data) {
          params += "&" + item + "=" + data[item];
        }
      }
      options.body = params.slice(1, params.length);
    } else {
      options.body = JSON.stringify(data);
    }
  }
  if (method === "GET") {
    let params = "";
    if (data && Object.keys(data).length > 0) {
      for (const item in data) {
        params += "&" + item + "=" + data[item];
      }
    }
    if (projectId && key) {
      params += "&projectId=" + projectId + "&key=" + key;
    }
    api = api + "?" + params.slice(1, params.length);
  }
  const res = fetch(`${base_url}${api}`, options)
    .then(res => res.json())
    .catch(e => console.log("错误", e));
  return res;
};
// 获取所有项目
export const getAllProject = () => base_fetch("/facade/project/all", "GET");
// 项目注册
export const registerPorject = data =>
  base_fetch("/facade/project", "POST", data, true);
// 获取当前项目日志
export const getLogs = () => base_fetch("/facade/log", "GET");
// 获取用户信息
export const getUserInfo = () => base_fetch("/facade/user/project", "GET");
// 通过id获取用户信息
export const getUserById = userId => base_fetch("/facade/user", "GET", userId);
// 获取项目密钥
export const getProjectKey = data =>
  base_fetch("/facade/project", "GET", data, true);
