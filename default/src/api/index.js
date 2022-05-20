import axios from 'axios';

import { clearToken, getAccessToken, getRefreshToken, setToken } from 'utils/localStorageService';

export const API_KEY = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000
});

let isTokenRefreshing = false;
let refreshSubscribers = [];

const onTokenRefreshed = (accessToken) => refreshSubscribers.map((callback) => callback(accessToken));
const addRefreshSubscriber = (callback) => refreshSubscribers.push(callback);

instance.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
instance.defaults.headers.common.Accept = 'application/json';
// instance.defaults.withCredentials = true; 토큰방식이 아닌 세션을 사용할 경우
instance.interceptors.request.use((config) => {
    const { tokenFlag, fileFlag } = config;

    if (tokenFlag === true) config.headers.Authorization = `Bearer ${getAccessToken()}`;
    if (fileFlag === true) config.headers['Content-Type'] = 'multipart/form-data';

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

        if (err.response?.status === 401) {
            if (isTokenRefreshing === false) {
                isTokenRefreshing = true;

                // 토큰 갱신 로직 실행
                return axios
                    .post('/auth/token', {
                        refresh_token: getRefreshToken()
                    })
                    .then(async (res) => {
                        if (res.status === 201) {
                            // 갱신된 토큰을 입력
                            setToken(res.data);

                            // header에다가 갱신된 토큰을 다시 입력
                            const accessToken = getAccessToken();

                            isTokenRefreshing = false;

                            // 저장된 API 요청에 새로운 함수를 주면서 재요청
                            onTokenRefreshed(accessToken);

                            refreshSubscribers = [];
                        }
                    })
                    .catch((error) => {
                        // refresh 토큰도 만료됐을 경우 에러가 날 것으로 추정됨.
                        console.log(error);
                        // 토큰 초기화
                        clearToken();

                        // 개발할때 로그인 페이지로 이동하는 방법에 대해서 구현해야 함.
                    });
            }
            // token이 재발급 되는 동안 API 요청은 refreshSubscribers에 저장
            const retryOriginalRequest = new Promise((resolve) => {
                addRefreshSubscriber((accessToken) => {
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    resolve(axios(originalRequest));
                });
            });
            return retryOriginalRequest;
        }

        return Promise.reject({
            statusCode: err.response?.status || 500,
            message: err.response?.status ? err.message : '네트워크 에러'
        });
    }
);

export const getData = async (url, params = {}, tokenFlag = false) => instance.get(`${url}`, { params, tokenFlag });

export const postData = async (url, body = {}, fileFlag = false, tokenFlag = false) =>
    instance.post(`${url}`, body, { fileFlag, tokenFlag });

export const putData = async (url, body = {}, fileFlag = false, tokenFlag = false) =>
    instance.put(`${url}`, body, { fileFlag, tokenFlag });

export const deleteData = async (url, body = {}, tokenFlag = false) =>
    instance.delete(`${url}`, { data: body, tokenFlag });
