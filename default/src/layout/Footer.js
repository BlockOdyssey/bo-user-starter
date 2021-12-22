import style from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={style.container}>
            <footer>
                <div className={style.leftFooter}>
                    <p className={style.leftText}>좌측푸터입니다</p>
                </div>
                <div className={style.rightFooter}>
                    <p className={style.rightText}>우측푸터입니다</p>
                </div>
            </footer>
        </div>
    );
}
