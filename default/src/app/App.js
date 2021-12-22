import Home from "pages/home/home";
import Login from "pages/login/login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Page404 from "pages/page404";
import Profile from "pages/profile/profile";
import Layout from "layout/Layout";

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
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    );

    return isLogin ? <PrivateRoutes /> : <PublicRoutes />;
}
