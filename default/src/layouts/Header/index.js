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
                <div className={style.contents}>
                    <Link to="/">
                        <h1 className={style.pageTitle}>
                            <img width="100%" className={style.logo} src={Logo} alt="BlockOdyssey" />
                        </h1>
                    </Link>
                    <nav className={style.navigation}>
                        <ul className={style.list}>
                            <li className={style.listItem}>
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li className={style.listItem}>
                                <Link to="/tv">TV</Link>
                            </li>
                            <li className={style.listItem}>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className={style.loginButton} type="button" onClick={() => dispatch(setOpen())}>
                        Login
                    </button>
                </div>
            </header>
        </>
    );
}
