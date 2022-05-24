import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from 'pages/Home/components/Movies/movies.module.scss';

function Movies({ isLoading, label, movieData }) {
    return (
        <section className={style.category}>
            <div className={style.title}>
                <h2>{label}</h2>
                <Link to="/movies">+ More</Link>
            </div>
            {isLoading ? (
                <div className={style.dataLoading}>Loading...</div>
            ) : (
                <ul className={style.list}>
                    {movieData.map((e) => (
                        <li key={e.id}>
                            <Link to={`/movie/${e.id}`}>
                                <figure className={style.imageContainer}>
                                    <img
                                        width="100%"
                                        src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
                                        alt="Lorem Picsum"
                                    />
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

Movies.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    movieData: PropTypes.array.isRequired
};

export default Movies;
