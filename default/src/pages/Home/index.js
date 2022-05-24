import { useQuery } from 'react-query';

import { getData } from 'api';
import Movies from 'pages/Home/components/Movies';

const API_KEY = process.env.REACT_APP_API_KEY;

// import style from 'pages/Home/home.module.scss';

// 페이지의 index 컴포넌트에선(여기선 home.js) 페이지에 필요한 컴포넌트를 import  하고
// 컴포넌트들 간의 layout을 설정하기 위한 css만 입력합니다.
// 또한 api 요청의 경우 페이지의 상단에서 선언하고 자식 컴포넌트에 전달합니다.

export default function Home() {
    const { data: nowPlayingListData, isLoading: nowPlayingListIsLoading } = useQuery(
        'getMovieNowPlayingList',
        () =>
            getData(`3/movie/now_playing`, {
                api_key: API_KEY,
                page: 1
            }),
        {
            select: (res) => res.data.results
        }
    );

    const { data: popularListData, isLoading: popularListIsLoading } = useQuery(
        'getMoviePopularList',
        () =>
            getData(`3/movie/popular`, {
                api_key: API_KEY,
                page: 1
            }),
        { select: (res) => res.data.results }
    );

    return (
        <>
            <Movies label="Now Playing" isLoading={nowPlayingListIsLoading} movieData={nowPlayingListData ?? []} />
            <Movies label="Popular List" isLoading={popularListIsLoading} movieData={popularListData ?? []} />
        </>
    );
}
