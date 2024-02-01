import { Link } from "react-router-dom";
import styles from "./MovieDetail.module.css";

function MovieDetail({ title, like, year, runtime, src, description, genres, url, rating}) {
    return (
        <div>
            <h1 className={styles.movie__title}>
                <a href={url} target="_blank">
                    {title}
                </a>
            </h1>

            <img src={src} alt={title} className={styles.movie__img} />
            <div className={styles.movie__container}>
                {/* <h4>description</h4> */}
                <p> {description}</p>

                <h2 className={styles.movie__year}>{year} </h2>
                <span className={styles.movie__rating}>{rating}</span><span className={styles.movie__rating2}>/10</span>
                <span className={styles.movie__like}>like : {like}</span>
                <h4>{runtime} min</h4>
                <div>
                
                    <span>
                        {genres.map((genre, index) => (
                            <li className={styles.movie__genres} key={index}>{genre}</li>
                        ))}
                    </span>
                </div>
            </div>
            <br />
            <hr />
            <div className={styles.movie__link}>
                <a href={url} target="_blank">
                    Go to the site &rarr;
                </a>
                <p />
                <Link to="/" className={styles.movie__listlink}>Go to the List &rarr;</Link>
            </div>
        </div>
    );
}

export default MovieDetail;