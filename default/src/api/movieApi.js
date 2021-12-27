import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const instance = axios.create({
    baseURL: "https://api.themoviedb.org",
    timeout: 5000
});
instance.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8";
instance.defaults.headers.common["Accept"] = "application/json";
// instance.defaults.withCredentials = true; 토큰방식이 아닌 세션을 사용할 경우
instance.interceptors.request.use((config) => {
    return config;
});
instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (err) => {
        return Promise.reject({ statusCode: err.response?.status || 500, message: err.response?.status ? err.message : "네트워크 에러" });
    }
);

// 아래에 API 별로 정의합니다. 항목이 많아질 경우 폴더를 만들어서 기능별로 분류해주세요.
export const getMovieList = () =>
    instance.get(`${"3/movie/now_playing"}`, {
        params: {
            api_key,
            page: 1
        }
    });
