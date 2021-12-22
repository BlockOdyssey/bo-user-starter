import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import style from "./layout.module.scss";

export default function Layout() {
    return (
        <>
            <Header />
            <div className={style.layout__out__contents}>
                <div className={style.layout__contents}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}
