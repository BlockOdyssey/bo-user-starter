import axios from 'axios';

import { instance, postData } from 'api';

import { clearToken, getAccessToken, getRefreshToken, setToken } from 'utils/localStorageService';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

const onFulfilled = (response) => {
    return response;
};

// # NOTICE
// revitu app axios response interceptor 기반 onRejected
const onRejected = async (error) => {
    const {
        config,
        response: { status, data }
    } = error;

    const originalRequest = config;

    if ((status === 401 && data.error === 'token_required') || data.error === 'user_not_exists') {
        return Promise.reject({ statusCode: status, message: data.error });
    }
    if (status === 401 && data.error === 'token_is_not_valid' && !originalRequest.retry) {
        // 무한반복을 피하기 위한 로직
        if (isRefreshing) {
            return new Promise(function (resolve, reject) {
                failedQueue.push({ resolve, reject });
            })
                .then((accessToken) => {
                    originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                    return axios(originalRequest);
                })
                .catch((err) => {
                    return Promise.reject(err);
                });
        }

        originalRequest.retry = true;
        isRefreshing = true;

        // 토큰 갱신 로직 실행
        return new Promise(async (resolve, reject) => {
            const refreshToken = await getRefreshToken();

            /**
             * # NOTICE
             * Refresh Token 갱신 API URL 경로 수정 필요
             */
            postData(
                '/users/token',
                {
                    refresh_token: refreshToken
                },
                false,
                false
            )
                .then(async ({ data }) => {
                    const newAccessToken = data.data.access_token;
                    const newRefreshToken = data.data.refresh_token;

                    await setToken({
                        access_token: newAccessToken,
                        refresh_token: newRefreshToken
                    });

                    instance.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                    if (failedQueue.length > 0) {
                        await processQueue(null, newAccessToken);
                    }
                    isRefreshing = false;
                    await resolve(axios(originalRequest));
                })
                .catch(async (err) => {
                    isRefreshing = false;
                    await processQueue(err, null);
                    await clearToken();
                    await reject(err);
                });
        });
    }
    return Promise.reject({ statusCode: status || 500, message: status ? data.error : '네트워크 에러', data });
};

const initialization = (initialConfig) => {
    const instance = axios.create(initialConfig);

    instance.interceptors.request.use(async (config) => {
        if (config.tokenFlag === true) {
            const accessToken = await getAccessToken();
            if (accessToken) config.headers.token = accessToken;
            delete config.tokenFlag;
        }

        if (config.fileFlag === true) {
            config.headers['Content-Type'] = 'multipart/form-data';
            delete config.fileFlag;
        }

        return config;
    });

    instance.interceptors.response.use(onFulfilled, onRejected);

    return instance;
};

export default initialization;
