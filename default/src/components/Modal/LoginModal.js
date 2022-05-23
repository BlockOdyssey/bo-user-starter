import { useState } from 'react';

import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { setClose } from 'slices/modalSlice';

import style from 'components/Modal/loginModal.module.scss';

Modal.defaultStyles.overlay.zIndex = 9999;

const customStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 400
    }
};

export default function LoginModal() {
    const dispatch = useDispatch();
    const { modalOpen } = useSelector((state) => state.modal);

    const { register, handleSubmit } = useForm();
    const [result, setResult] = useState('');

    const onSubmit = (data) => setResult(JSON.stringify(data));

    return (
        <Modal isOpen={modalOpen} style={customStyles}>
            <section className={style.login}>
                <header className={style.login__header}>
                    <h2 className={style.login__title}>로그인</h2>
                    <button
                        aria-label="close button"
                        className={style['login__close-button']}
                        type="button"
                        onClick={() => dispatch(setClose())}
                    >
                        X
                    </button>
                </header>
                <form className={style.login__form} onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
                    <input
                        {...register('userId', { required: true })}
                        type="email"
                        placeholder="아이디"
                        className={style.login__input}
                    />
                    <input
                        {...register('userPw', { required: true })}
                        type="password"
                        placeholder="비밀번호"
                        className={style.login__input}
                    />
                    {result && <p>{result}</p>}
                    <input className={style['login__submit-button']} type="submit" value="로그인" />
                </form>
            </section>
        </Modal>
    );
}
