import React from "react";
import styles from "./movies.module.scss";

const Movies = ({ label, isLoading, data }) => {
    return (
        <div className={styles.category}>
            <div className={styles.category__title}>
                <div>{label}</div>
                <div>+ More</div>
            </div>
            <div className={styles.contents__list}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    data?.map((e, i) => (
                        <figure className={styles.contents__item} key={i}>
                            <img src={`https://image.tmdb.org/t/p/w200/${e.poster_path}`} alt="poster" />
                            <div className={styles.contents__title} key={i}>
                                {e.original_title}
                            </div>
                        </figure>
                    ))
                )}
            </div>
        </div>
    );
};

export default Movies;
