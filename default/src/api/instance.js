import axios from "axios";
import { _clearToken, _getAccessToken, _getRefreshToken, _setToken } from "utils/localStorageService";

export const api_key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000
});

instance.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8";
instance.defaults.headers.common["Accept"] = "application/json";
// instance.defaults.withCredentials = true; 토큰방식이 아닌 세션을 사용할 경우
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        const originalRequest = err.config;

        if (err.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios
                .post("/auth/token", {
                    refresh_token: _getRefreshToken()
                })
                .then(async (res) => {
                    if (res.status === 201) {
                        // 1) put token to LocalStorage
                        _setToken(res.data);

                        // 2) Change Authorization header
                        originalRequest.headers.token = _getAccessToken();

                        // 3) return originalRequest object with Axios.
                        return axios(originalRequest);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    _clearToken();
                });
        }

        return Promise.reject({ statusCode: err.response?.status || 500, message: err.response?.status ? err.message : "네트워크 에러" });
    }
);

export const getData = async (url, params = {}, tokenFlag = false) => {
    console.log(instance.get);
    let headers = {};
    let token = _getAccessToken(); // token을 저장하는 형태에 맞춰서 JSON.parse를 사용하세요.

    if (tokenFlag === true) headers["token"] = token;

    return await instance.get(`${url}`, { params, headers });
};

export const postData = async (url, body = {}, fileFlag = false, tokenFlag = false) => {
    let headers = {};
    let token = _getAccessToken(); // token을 저장하는 형태에 맞춰서 JSON.parse를 사용하세요.

    if (fileFlag === true) headers["Content-Type"] = "multipart/form-data";
    if (tokenFlag === true) headers["token"] = token;

    return await instance.post(`${url}`, body, { headers });
};

export const putData = async (url, body = {}, fileFlag = false, tokenFlag = false) => {
    let headers = {};
    let token = _getAccessToken(); // token을 저장하는 형태에 맞춰서 JSON.parse를 사용하세요.

    if (fileFlag === true) headers["Content-Type"] = "multipart/form-data";
    if (tokenFlag === true) headers["token"] = token;

    return await instance.put(`${url}`, body, { headers });
};

export const deleteData = async (url, body = {}, tokenFlag = false) => {
    let headers = {};
    let token = _getAccessToken(); // token을 저장하는 형태에 맞춰서 JSON.parse를 사용하세요.

    if (tokenFlag === true) headers["token"] = token;

    return await instance.delete(`${url}`, { data: body, headers });
};
