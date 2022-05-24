import axiosRequestConfiguration from './config';
import initialization from './setup';

const instance = initialization(axiosRequestConfiguration);
/**
 * @param {string} url - API URL 경로
 * @param {object=} params - Request Parameter 데이터
 * @param {boolean=} tokenFlag - Token 포함 여부
 * @returns AxiosResponse
 */

const getData = async (url, params = {}, tokenFlag = false) => {
    const result = await instance.get(`${url}`, { params, tokenFlag });
    return result;
};

/**
 * @param {string} url - API URL 경로
 * @param {object=} body - Request Body 데이터
 * @param {object=} fileFlag - formData 여부
 * @param {boolean=} tokenFlag - Token 포함 여부
 * @returns AxiosResponse
 */
const postData = async (url, body = {}, fileFlag = false, tokenFlag = false) => {
    const result = await instance.post(`${url}`, body, { fileFlag, tokenFlag });
    return result;
};

/**
 * @param {string} url - API URL 경로
 * @param {object=} body - Request Body 데이터
 * @param {object=} fileFlag - formData 여부
 * @param {boolean=} tokenFlag - Token 포함 여부
 * @returns AxiosResponse
 */
// export const postMessage = async (url, body = {}, fileFlag = false, tokenFlag = false) => await axios.post(`${messageUrl + url}`, body);

const putData = async (url, body = {}, fileFlag = false, tokenFlag = false) => {
    const result = await instance.put(`${url}`, body, { fileFlag, tokenFlag });
    return result;
};

/**
 * @param {string} url - API URL 경로
 * @param {object=} body - Request Body 데이터
 * @param {boolean=} tokenFlag - Token 포함 여부
 * @returns AxiosResponse
 */
const deleteData = async (url, body = {}, tokenFlag = false) => {
    const result = await instance.delete(`${url}`, { data: body, tokenFlag });
    return result;
};

export { instance, getData, postData, putData, deleteData };