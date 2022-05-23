import style from 'layouts/Footer/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.footer__contents}>
                <div className={style.footer__left}>
                    <p className={style.footer__text}>BlockOdyssey</p>
                </div>
                <div className={style.footer__right}>
                    <p className={style.footer__text}>bo-user-starter</p>
                </div>
            </div>
        </footer>
    );
}
