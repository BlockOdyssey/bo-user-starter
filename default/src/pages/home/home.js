import { getMovieList } from "api/movieApi";
import styles from "pages/home/home.module.scss";
import { useQuery } from "react-query";
import Movies from "./Components/Movies";

// 페이지의 index 컴포넌트에선(여기선 home.js) 페이지에 필요한 컴포넌트를 import  하고
// 컴포넌트들 간의 layout을 설정하기 위한 css만 입력합니다.
// 또한 api 요청의 경우 페이지의 상단에서 선언하고 자식 컴포넌트에 전달합니다.
const Home = () => {
    const { data, isLoading } = useQuery("getMovieList", () => getMovieList(), { select: (res) => res.results });
    return (
        <div className={styles.container}>
            <Movies isLoading={isLoading} data={data} />
        </div>
    );
};

export default Home;
