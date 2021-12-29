import style from "./header.module.scss";
import logo from "assets/images/logo.png";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => setResult(JSON.stringify(data));
    const [result, setResult] = useState("");

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
        }
    };
    return (
        <div className={style.container}>
            <header>
                <div className={style.nav}>
                    <div className={style.logo}>
                        <Link to="/">
                            <img src={logo} className={style.logoImg} />
                        </Link>
                    </div>
                    <nav className={style.navBar}>
                        <ul>
                            <li>
                                <Link to="/movie">Movie</Link>
                            </li>
                            <li>
                                <Link to="/tv">TV</Link>
                            </li>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.login}>
                    <button onClick={() => setModalIsOpen(true)}>Login</button>
                </div>
                <Modal isOpen={modalIsOpen} style={customStyles}>
                    <div className={style.login__modal}>
                        <div className={style.login__form}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" {...register("userId", { required: true })} placeholder="아이디" />
                                <input type="password" {...register("userPw", { required: true })} placeholder="비밀번호" />
                                <p>{result}</p>
                                <button type="submit">로그인</button>
                            </form>
                        </div>
                        <div>
                            <button onClick={() => setModalIsOpen(false)}>X</button>
                        </div>
                    </div>
                </Modal>
            </header>
        </div>
    );
}
