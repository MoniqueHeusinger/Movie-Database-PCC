import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import loadingGif from "../assets/img/icons/popcorn-animated.gif";
import starIcon from "../assets/img/icons/stern-icon.png";
import classNames from "classnames";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [trailerId, setTrailerId] = useState(null);

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
    console.log({ movie });

    const openMovieTrailer = () => {
        const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_GENRES;
        const movieId = movie.node.id;
        console.log({ movieId });

        fetch(`https://imdb8.p.rapidapi.com/title/v2/get-trailers?tconst=${movieId}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY_MOVIEDB,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                const movieTrailerId = data.data.title.primaryVideos.edges.length > 0 ? data.data.title.primaryVideos.edges[0].node.id : null;
                console.log({ movieTrailerId })
                if (movieTrailerId) {
                    window.open(`https://www.imdb.com/video/${movieTrailerId}/`, '_blank');
                } else {
                    console.log("No trailer available :(");
                }
            })
            .catch((error) => console.log(error))
    }

    return (
        <>

            {isLoading ? (
                <section className="flex justify-center items-center h-screen">
                    <img src={loadingGif} alt="Loading..." className="w-24 h-24 animate-spin" />
                </section>
            ) : (
                <section className="min-h-screen" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0) 100%), url(${moviePoster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <Nav />
                    <article className="px-20">
                        {/* Title - genre - rating - release year */}
                        <article className=" pt-36 pb-10">
                            <h1 className="text-5xl font-poppinsSBd leading-loose">{movie.node.titleText.text}</h1>
                            <div className="flex md:flex-row sm:flex-col sm:items-start md:justify-between md:items-center lg:max-w-2xl w-2/3 sm:w-full font-poppinsLg">
                                <p className="">{movie.node.titleGenres.genres.map(genre => genre.genre.text).join(" / ")}</p>


                                <div className="flex gap-1 sm:my-3">
                                    <img src={starIcon} alt="" className="w-3.5 h-3.5" />
                                    <p className=" leading-none">8</p>
                                </div>
                                <p>{movie.node.releaseDate.year}</p>
                            </div>
                        </article>

                        {/* Movie data section */}
                        <section className="pb-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Plot + Buttons */}
                            <article className="my-8">
                                <p className="lg:text-lg sm:text-base">{movie.node.plot.plotText.plainText}</p>
                                <div className="flex justify-start gap-12">
                                    <ButtonFilled buttonText="Pop some trivia" />
                                    <ButtonOutline buttonText="&#9654; Trailer" onClick={openMovieTrailer} />
                                </div>
                            </article>

                            {/* Credits */}
                            <article className="mt-2 px-8 py-2 bg-[#242424] flex flex-col divide-y divide-dashed divide-zinc-700 rounded-xl shadow-[8px_12px_21px_-2px_rgba(0,0,0,0.8)]">
                                <p className="pb-2 font-poppinsSBd text-xl">Credits:</p>
                                {movie && movie.node.principalCredits[0].credits.map((creditItem) => {
                                    const creditImage = creditItem.name.primaryImage.url;
                                    return (
                                        <div className="py-3 flex gap-4 items-center font-poppinsXLgItalic" >
                                            <div className="w-16 h-16 rounded-full" style={{ backgroundImage: `url(${creditImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                                            <p>{creditItem.name.nameText.text}</p>
                                        </div>
                                    )
                                })
                                }

                            </article>
                        </section>



                    </article>


                </section>
            )}
        </>
    );
}

export default MovieDetails;