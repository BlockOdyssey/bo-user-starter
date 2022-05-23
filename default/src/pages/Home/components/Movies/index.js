import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from 'pages/Home/components/Movies/movies.module.scss';

const imageList = {
    'Now Playing': {
        url: 'https://picsum.photos/200/30',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    'Popular List': {
        url: 'https://picsum.photos/201/30',
        images: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
};

function Movies({ isLoading, label }) {
    const { images, url } = imageList[label];

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
                    {images.map((e) => (
                        <li key={e}>
                            <Link to={`/movie/${e}`}>
                                <figure className={style.imageContainer}>
                                    <img width="100%" src={`${url}${e}`} alt="Lorem Picsum" />
                                    <figcaption className={style.imageCaption}>{e}번째 영화</figcaption>
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
    label: PropTypes.string.isRequired
};

export default Movies;
