import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import ButtonFilled from "../components/ButtonFilled";
import loadingGif from "../assets/img/icons/popcorn-animated.gif";

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setMovie(location.state.movie);
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [location.state.movie])

    if (!movie) {
        return (
            <>
                <Nav />
                <section className="flex justify-center items-center h-screen relative">
                    <img src={loadingGif} alt="Loading..." className="w-48 h-48 z-30 rouded-full" />
                    <div className="w-96 h-96 blur-xl bg-[#fff] absolute bottom-30 left-50 z-20 rounded-full"></div>
                </section>
            </>
        )
    }

    const moviePoster = movie.node.primaryImage.url;

    return (
        <>

            {isLoading ? (
                <section className="flex justify-center items-center h-screen">
                    <img src={loadingGif} alt="Loading..." className="w-24 h-24 animate-spin" />
                </section>
            ) : (
                <section className=" h-screen" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0) 100%), url(${moviePoster})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <Nav />
                    <article className="px-20 py-10">
                        <h1 className="text-5xl font-poppinsSBd leading-loose">{movie.node.titleText.text}</h1>
                    </article>

                </section>
            )}
        </>
    );
}

export default MovieDetails;