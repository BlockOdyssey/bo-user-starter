import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { setOpen } from 'slices/modalSlice';

import Logo from 'assets/images/logo.png';

import style from 'layouts/Header/header.module.scss';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header className={style.header}>
                <div className={style.header__contents}>
                    <Link to="/">
                        <h1 className={style['header__page-title']}>
                            <img width="100%" className={style.header__logo} src={Logo} alt="BlockOdyssey" />
                        </h1>
                    </Link>
                    <nav className={style.header__navigation}>
                        <ul className={style['header__navigation-list']}>
                            <li className={style['header__navigation-item']}>
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li className={style['header__navigation-item']}>
                                <Link to="/tv">TV</Link>
                            </li>
                            <li className={style['header__navigation-item']}>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={style['header__login-button']} type="button" onClick={() => dispatch(setOpen())}>
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}
