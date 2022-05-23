import style from 'layouts/Footer/footer.module.scss';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.contents}>
                <div className={style.footerLeft}>
                    <p>BlockOdyssey</p>
                </div>
                <div className={style.footerRight}>
                    <p>bo-user-starter</p>
                </div>
            </div>
        </footer>
    );
}
