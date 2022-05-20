import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getData, API_KEY } from 'api';
import 'pages/DetailPage/detail.scss';

// 페이지의 index 컴포넌트에선(여기선 home.js) 페이지에 필요한 컴포넌트를 import  하고
// 컴포넌트들 간의 layout을 설정하기 위한 css만 입력합니다.
// 또한 api 요청의 경우 페이지의 상단에서 선언하고 자식 컴포넌트에 전달합니다.
const Detail = () => {
    const params = useParams();
    const { idx } = params;

    const { data, isLoading } = useQuery(['getMovie', idx], () => getData(`3/movie/${idx}`, { API_KEY }));

    return (
        <div className="container">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="introduceContainer">
                    <div className="imageArea">
                        <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} alt="poster" />
                    </div>
                    <div className="movieTextArea">
                        <div className="movieTitle">
                            {data.original_title} <small className="movieStatus">[{data.status}]</small>
                        </div>
                        <div className="movieOverView">{data.overview}</div>
                        <ul className="movieInfoList">
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
