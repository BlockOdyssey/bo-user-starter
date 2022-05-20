import { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from 'layout';
import Page404 from 'pages/404';
import Detail from 'pages/DetailPage';
import Home from 'pages/HomePage';
import Login from 'pages/LoginPage';
import Movie from 'pages/MoviePage';
import Profile from 'pages/ProfilePage';

import { isExpired, isUpdateRequired, clearToken, getAccessToken, getRefreshToken } from 'utils/localStorageService';

function PrivateRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );
}

function PublicRoutes() {
    return (
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
}

export default function App() {
    const isLogin = false;
    // const { isLogin } = useSelector(loginSelector);

    useEffect(() => {
        const accessToken = getAccessToken();
        const refreshToken = getRefreshToken();

        // 액세스 토큰이나 리프레시 토큰, 지갑 주소 중에 없는게 있거나 리프레시 토큰이 만료됨
        if (!accessToken || !refreshToken || isExpired(refreshToken)) {
            clearToken();

            // 로그인 페이지로 이동
            return;
        }

        // 리프레시 토큰의 만료기간이 임박 했을 경우 재갱신
        if (isUpdateRequired(refreshToken)) {
            // 리프레시 토큰을 갱신하는 API 연결
        }
    }, []);

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
