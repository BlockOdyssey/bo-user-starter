import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import 'pages/Home/components/Movies/movies.scss';

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

const Movies = ({ label, isLoading }) => {
    const { images, url } = imageList[label];

    return (
        <section className="category">
            <div className="category__title">
                <h2>{label}</h2>
                <Link to="/movies">+ More</Link>
            </div>
            {isLoading ? (
                <div className="category__data-loading">Loading...</div>
            ) : (
                <ul className="category__list">
                    {images.map((e) => (
                        <li key={e}>
                            <Link to={`/movie/${e}`}>
                                <figure className="category__figure">
                                    <img width="100%" src={`${url}${e}`} alt="Lorem Picsum" />
                                    <figcaption className="category__figcaption">{e}번째 영화</figcaption>
                                </figure>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

Movies.propTypes = {
    label: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export default Movies;
