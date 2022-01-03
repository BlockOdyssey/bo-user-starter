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
instance.interceptors.request.use((config) => {
    if (config.tokenFlag === true) config.headers["token"] = _getAccessToken();
    if (config.fileFlag === true) config.headers["Content-Type"] = "multipart/form-data";

    delete config.tokenFlag;
    delete config.fileFlag;

    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        const originalRequest = err.config;

        if (err.response?.status === 401 && !originalRequest._retry) {
            // 무한반복을 피하기 위한 로직
            originalRequest._retry = true;

            // 토큰 갱신 로직 실행
            return axios
                .post("/auth/token", {
                    refresh_token: _getRefreshToken()
                })
                .then(async (res) => {
                    if (res.status === 201) {
                        // 갱신된 토큰을 입력
                        _setToken(res.data);

                        // header에다가 갱신된 토큰을 다시 입력
                        originalRequest.headers.token = _getAccessToken();

                        // 재요청
                        return axios(originalRequest);
                    }
                })
                .catch((error) => {
                    // refresh 토큰도 만료됐을 경우 에러가 날 것으로 추정됨.
                    console.log(error);
                    // 토큰 초기화
                    _clearToken();

                    // 개발할때 로그인 페이지로 이동하는 방법에 대해서 구현해야 함.
                });
        } else {
            return Promise.reject({ statusCode: err.response?.status || 500, message: err.response?.status ? err.message : "네트워크 에러" });
        }
    }
);

export const getData = async (url, params = {}, tokenFlag = false) => await instance.get(`${url}`, { params, tokenFlag });

export const postData = async (url, body = {}, fileFlag = false, tokenFlag = false) => await instance.post(`${url}`, body, { fileFlag, tokenFlag });

export const putData = async (url, body = {}, fileFlag = false, tokenFlag = false) => await instance.put(`${url}`, body, { fileFlag, tokenFlag });

export const deleteData = async (url, body = {}, tokenFlag = false) => await instance.delete(`${url}`, { data: body, tokenFlag });
