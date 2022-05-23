import { Outlet } from 'react-router-dom';

import LoginModal from 'components/Modal/LoginModal';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import style from 'layouts/layout.module.scss';

export default function Layout() {
    return (
        <div className={style.layout}>
            <Header />
            <main className={style.main}>
                <div className={style.main__contents}>
                    <Outlet />
                </div>
            </main>
            <Footer />
            <LoginModal />
        </div>
    );
}
