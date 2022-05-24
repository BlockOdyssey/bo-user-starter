/**
 * #### Axios Base Config
 * @property {string} baseURL - Axios 기본 URL 경로 정보
 * @property {string} responseType - Axios 응답 데이터 타입
 */
const axiosRequestConfiguration = {
    baseURL: process.env.REACT_APP_BASE_URL,
    responseType: 'json' // axios responseType이 json이기 때문에 삭제해도 무관합니다
};

export default axiosRequestConfiguration;
