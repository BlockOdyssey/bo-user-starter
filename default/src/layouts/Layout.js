import { Outlet } from 'react-router-dom';

import LoginModal from 'components/Modal/LoginModal';
import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import 'layouts/layout.scss';

export default function Layout() {
    return (
        <div className="layout">
            <Header />
            <main className="main">
                <div className="main__contents">
                    <Outlet />
                </div>
            </main>
            <Footer />
            <LoginModal />
        </div>
    );
}
