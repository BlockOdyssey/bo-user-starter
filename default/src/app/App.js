import Layout from "layout/Layout";
import Detail from "pages/detail/detail";
import Home from "pages/home/home";
import Login from "pages/login/login";
import Movie from "pages/movie/movie";
import Page404 from "pages/page404";
import Profile from "pages/profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    const isLogin = false;
    // const { isLogin } = useSelector(loginSelector);

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
