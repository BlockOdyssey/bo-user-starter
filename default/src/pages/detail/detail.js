import { getMovie } from "api/movieApi";
import styles from "pages/detail/detail.module.scss";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

// 페이지의 index 컴포넌트에선(여기선 home.js) 페이지에 필요한 컴포넌트를 import  하고
// 컴포넌트들 간의 layout을 설정하기 위한 css만 입력합니다.
// 또한 api 요청의 경우 페이지의 상단에서 선언하고 자식 컴포넌트에 전달합니다.
const Detail = () => {
    const params = useParams();
    const idx = params.idx;

    const { data, isLoading } = useQuery(["getMovie", idx], () => getMovie(idx));

    console.log(data);

    return (
        <div className={styles.container}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className={styles.introduceContainer}>
                    <div className={styles.imageArea}>
                        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="poster" />
                    </div>
                    <div className={styles.movieTextArea}>
                        <div className={styles.movieTitle}>
                            {data.original_title} <small className={styles.movieStatus}>[{data.status}]</small>
                        </div>
                        <div className={styles.movieOverView}>{data.overview}</div>
                        <ul className={styles.movieInfoList}>
                            <li>
                                <span>Vote Average :</span>
                                <span>{data.vote_average}</span>
                            </li>
                            <li>
                                <span>Runtime :</span>
                                <span>{data.runtime}</span>
                            </li>
                            <li>
                                <span>Release Date :</span>
                                <span>{data.release_date}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;
