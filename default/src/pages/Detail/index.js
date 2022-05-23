import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getData, API_KEY } from 'api';

import style from 'pages/Detail/detail.module.scss';

const movieData = {
    poster_path: 'https://picsum.photos/300/300',
    original_title: 'Lorem Ipsum',
    status: '상영중',
    overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nulla vulputate porta eros, vel feugiat purus. Nam elementum dignissim tellus, eget feugiat elit pellentesque at. Donec faucibus suscipit nisi et scelerisque. 
    Nunc a dui rhoncus, tempor velit vitae, varius tellus. Duis placerat, mauris eu scelerisque auctor, ante ante aliquet enim, ut imperdiet turpis ipsum eu dui. 
    Nam ut varius dolor. Donec eget augue non diam molestie tempor sed vel massa. 
    In rutrum auctor metus et tempus.
    
    Quisque non purus aliquam, euismod lectus sit amet, bibendum mi. 
    Sed quis pretium risus, at fringilla ex. Proin luctus lectus id ante hendrerit, ut egestas dui tincidunt. 
    Pellentesque aliquam ullamcorper hendrerit. Aenean tempor mauris quis risus lobortis tempor. 
    Etiam vitae neque lobortis, varius elit ut, aliquam ligula. Cras fringilla pharetra nisl, vitae malesuada lectus lacinia et. 
    Sed tempus hendrerit odio, sed faucibus lectus ultrices sit amet. Donec ante mauris, aliquet vitae ex vitae, facilisis tincidunt elit. 
    Aliquam erat volutpat. Vivamus porttitor nisl sit amet lacinia consectetur. Donec facilisis velit ligula, ut consequat diam laoreet sit amet. Nam dapibus gravida justo.`,
    vote_average: 5,
    runtime: '125분',
    release_date: '2022-05-28'
};

// 페이지의 index 컴포넌트에선(여기선 home.js) 페이지에 필요한 컴포넌트를 import  하고
// 컴포넌트들 간의 layout을 설정하기 위한 css만 입력합니다.
// 또한 api 요청의 경우 페이지의 상단에서 선언하고 자식 컴포넌트에 전달합니다.
export default function Detail() {
    const params = useParams();
    const { idx } = params;

    const { data, isLoading } = useQuery(['getMovie', idx], () => getData(`3/movie/${idx}`, { API_KEY }));

    console.log(data, isLoading);

    const movieLoading = false;

    return movieLoading ? (
        <div className={style.dataLoading}>Loading...</div>
    ) : (
        <div className={style.movie}>
            <img className={style.image} width="100%" height={500} src={movieData.poster_path} alt="poster" />
            <section className={style.info}>
                <h2 className={style.title}>
                    {movieData.original_title} <small className={style.status}>[{movieData.status}]</small>
                </h2>
                <ul className={style.list}>
                    <li className={style.listItem}>
                        <span className={style.category}>평점 :</span>
                        <span>{movieData.vote_average}</span>
                    </li>
                    <li className={style.listItem}>
                        <span className={style.category}>상영 시간 :</span>
                        <span>{movieData.runtime}</span>
                    </li>
                    <li className={style.listItem}>
                        <span className={style.category}>상영일자 :</span>
                        <span>{movieData.release_date}</span>
                    </li>
                </ul>
                <p className={style.overview}>{movieData.overview}</p>
            </section>
        </div>
    );
}
