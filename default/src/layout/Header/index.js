import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setOpen } from 'slices/modalSlice';

import Logo from 'assets/images/logo.png';

import './header.scss';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header className="header">
                <div className="header__contents">
                    <Link to="/">
                        <h1 className="logo">
                            <img width="100%" className="logo__image" src={Logo} alt="BlockOdyssey" />
                        </h1>
                    </Link>
                    <nav className="navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="/tv">TV</Link>
                            </li>
                            <li className="navigation__item">
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="login-button" type="button" onClick={() => dispatch(setOpen())}>
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}
