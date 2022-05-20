import 'layout/Footer/footer.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__contents">
                <div className="footer__left">
                    <p className="footer__text">좌측푸터입니다</p>
                </div>
                <div className="footer__right">
                    <p className="footer__text">우측푸터입니다</p>
                </div>
            </div>
        </footer>
    );
}
