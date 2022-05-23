import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setOpen } from 'slices/modalSlice';

import Logo from 'assets/images/logo.png';

import 'layouts/Header/header.scss';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header className="header">
                <div className="header__contents">
                    <Link to="/">
                        <h1 className="header__page-title">
                            <img width="100%" className="header__logo" src={Logo} alt="BlockOdyssey" />
                        </h1>
                    </Link>
                    <nav className="header__navigation">
                        <ul className="header__navigation-list">
                            <li className="header__navigation-item">
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li className="header__navigation-item">
                                <Link to="/tv">TV</Link>
                            </li>
                            <li className="header__navigation-item">
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="header__login-button" type="button" onClick={() => dispatch(setOpen())}>
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}
