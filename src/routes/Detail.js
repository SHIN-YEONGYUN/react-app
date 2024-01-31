import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css"

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    <MovieDetail
                        title={movie.title}
                        src={movie.medium_cover_image}
                        summary={movie.summary}
                        genres={movie.genres}
                        url={movie.url}
                        rating={movie.rating}
                        description={movie.description_full}
                        runtime={movie.runtime}
                        like={movie.like_count}
                        year={movie.year}
                        video={movie.yt_trailer_code}
                    />
                </div>
            )}
        </div>
    );
}

export default Detail;