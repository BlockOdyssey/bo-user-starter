import React from "react";
import { Link } from "react-router-dom";
import styles from "./movies.module.scss";

const Movies = ({ label, isLoading, data, func }) => {
    console.log("data :: ", data);
    return (
        <div className={styles.category}>
            <div className={styles.category__title}>
                <div>{label}</div>
                <div>
                    <Link to="/movies">+ More</Link>
                </div>
            </div>
            <div className={styles.contents__list}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    data?.map((e, i) => (
                        <Link to={`/movie/${e.id}`}>
                            <figure className={styles.contents__item} key={i}>
                                <img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`} alt="poster" />
                                <div className={styles.contents__title} key={i}>
                                    {e.original_title}
                                </div>
                            </figure>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Movies;
