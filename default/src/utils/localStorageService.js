export const _setToken = (tokenObj) => {
    localStorage.setItem("access_token", tokenObj.access_token);
    localStorage.setItem("refresh_token", tokenObj.refresh_token);
};
export const _getAccessToken = () => localStorage.getItem("access_token");
export const _getRefreshToken = () => localStorage.getItem("refresh_token");
export const _clearToken = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
};

const expiredLimitDay = 14;
const expiredLimitTime = expiredLimitDay * 24 * 60 * 60 * 1000;
const updateLimitTime = expiredLimitTime - 6 * 60 * 60 * 1000;

export const isExpired = (refreshToken) => {
    const created = new Date(Number(JSON.parse(Buffer.from(refreshToken.split(".")[1], "base64").toString()).iat) * 1000);
    const expired = new Date(created.getTime() + expiredLimitTime); //1209600000ms = 14일
    const now = new Date();
    return now >= expired;
};

export const isUpdateRequired = (refreshToken) => {
    const created = new Date(Number(JSON.parse(Buffer.from(refreshToken.split(".")[1], "base64").toString()).iat) * 1000);
    const dueToExpired = new Date(created.getTime() + updateLimitTime); //1188000000ms = 13일 18시간 (14일 - 6시간)
    const now = new Date();
    return now >= dueToExpired;
};
