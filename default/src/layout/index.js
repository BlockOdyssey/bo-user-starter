import { Outlet } from 'react-router-dom';

import LoginModal from 'components/Modal/LoginModal';
import Footer from 'layout/Footer';
import Header from 'layout/Header';
import 'layout/layout.scss';

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
