import Layout from "layout/Layout";
import Detail from "pages/detail/detail";
import Home from "pages/home/home";
import Login from "pages/login/login";
import Movie from "pages/movie/movie";
import Page404 from "pages/404/page404";
import Profile from "pages/profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { isUpdateRequired, _clearToken, _getAccessToken, _getRefreshToken } from "utils/localStorageService";

export default function App() {
    const isLogin = false;
    // const { isLogin } = useSelector(loginSelector);

    useEffect(() => {
        const accessToken = _getAccessToken();
        const refreshToken = _getRefreshToken();

        // 액세스 토큰이나 리프레시 토큰, 지갑 주소 중에 없는게 있거나 리프레시 토큰이 만료됨
        if (!accessToken || !refreshToken || isExpired(refreshToken)) {
            _clearToken();

            // 로그인 페이지로 이동
            return;
        }

        // 리프레시 토큰의 만료기간이 임박 했을 경우 재갱신
        if (isUpdateRequired(refreshToken)) {
            // 리프레시 토큰을 갱신하는 API 연결

            return;
        }
    }, []);

    const PrivateRoutes = () => (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );

    const PublicRoutes = () => (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/movie/:idx" element={<Detail />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
