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
