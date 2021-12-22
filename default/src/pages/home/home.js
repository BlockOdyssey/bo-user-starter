import axios from "axios";
import styles from "pages/home/home.module.scss";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { mode, api, api_key } from "api/Url";
import { useForm } from "react-hook-form";

const Home = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => setResult(JSON.stringify(data));
    const [result, setResult] = useState("");

    const { data, isLoading } = useQuery("catfact", () => getData("https://api.themoviedb.org/3/movie/now_playing"));

    const getData = (url) => {
        return axios
            .get(url, {
                params: {
                    api_key,
                    page: 1
                }
            })
            .then((res) => res.data.results);
    };

    useEffect(() => {
        // console.log(data);
    }, [data]);

    return (
        <>
            <div className={styles.category}>
                <div className={styles.category__title}>
                    <div>Now Playing</div>
                    <div>+ More</div>
                </div>
                <div className={styles.contents__list}>
                    {isLoading && <p>Loading...</p>}
                    {data?.map((e, i) => (
                        <figure className={styles.contents__item} key={i}>
                            <img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`} />
                            <div className={styles.contents__title} key={i}>
                                {e.original_title}
                            </div>
                        </figure>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
