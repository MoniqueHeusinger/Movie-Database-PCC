import { useLocation, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import loadingGif from "../assets/img/icons/popcorn-animated.gif";
import starIcon from "../assets/img/icons/stern-icon.png";
import classNames from "classnames";
import ButtonFilled from "../components/ButtonFilled";
import { useMoviesDummy } from "../context/MoviesDummyContext"

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [trailerId, setTrailerId] = useState(null);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
    const testMovies = useMoviesDummy();

    {/* ---------- OLD FOR API DATA ------------- */ }
    {/*
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
        const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
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
            */}
    {/* ---------- OLD FOR API DATA ------------- */ }

    useEffect(() => {
        const selectedMovie = testMovies.find(movie => movie.id === id);
        setMovie(selectedMovie);
        setIsLoading(false);
    }, [id, testMovies]);


    // so something, when screen size is greater than/equals 1024px
    useEffect(() => {
        const handleResizeScreen = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResizeScreen);

        return () => {
            window.removeEventListener("resize", handleResizeScreen);
        };
    }, []);

    if (isLoading) {
        return (
            <>
                <Nav />
                <section className="flex justify-center items-center h-screen relative">
                    <img src={loadingGif} alt="Loading..." className="w-48 h-48 z-30 rounded-full" />
                    <div className="w-96 h-96 blur-xl bg-[#fff] absolute bottom-30 left-50 z-20 rounded-full"></div>
                </section>
            </>
        );
    };

    if (!movie) {
        return (
            <>
                <Nav />
                <section className="flex justify-center items-center h-screen">
                    <p className="text-2xl">Movie not found.</p>
                </section>
            </>
        );
    }


    return (
        <>
            {/* ---------- OLD FOR API DATA ------------- */}
            {/*{isLoading ? (
                <section className="flex justify-center items-center h-screen">
                    <img src={loadingGif} alt="Loading..." className="w-24 h-24 animate-spin" />
                </section>
            ) : (
                <section className="min-h-screen" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0) 100%), url(${moviePoster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <Nav />
                    <article className="px-20">
                        {/* Title - genre - rating - release year */}
            {/*<article className=" pt-36 pb-10">
                            <h1 className="text-5xl font-poppinsSBd leading-loose">{movie.node.titleText.text}</h1>
                            {/* --- genres --- */}
            {/*<div className="flex md:flex-row sm:flex-col sm:items-start md:justify-between md:items-center lg:max-w-2xl w-2/3 sm:w-full font-poppinsLg gap-4">
                                <p className="">{movie.node.titleGenres.genres.map(genre => genre.genre.text).join(" / ")}</p>
                                {/* --- rating --- */}
            {/*<div className="flex gap-1 sm:my-3">
                                    <img src={starIcon} alt="" className="w-3.5 h-3.5" />
                                    <p className=" leading-none">8</p>
                                </div>
                                {/* --- release year --- */}
            {/*<p>{movie.node.releaseDate.year}</p>
                            </div>
                        </article>

                        {/* Movie data section */}
            {/*<section className="pb-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Plot + Buttons */}
            {/*<article className="my-8">
                                <p className="lg:text-lg sm:text-base">{movie.node.plot.plotText.plainText}</p>
                                <div className="flex justify-start gap-12">
                                    <ButtonFilled buttonText="Pop some trivia" />
                                    <ButtonOutline buttonText="&#9654; Trailer" onClick={openMovieTrailer} />
                                </div>
                            </article>

                            {/* Credits */}
            {/*<article className="mt-2 px-8 py-2 bg-[#242424] flex flex-col divide-y divide-dashed divide-zinc-700 rounded-xl shadow-[8px_12px_21px_-2px_rgba(0,0,0,0.8)]">
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
            )}*/}
            {/* ---------- OLD FOR API DATA ------------- */}

            <section className="min-h-screen bg-fixed" style={isLargeScreen ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0) 100%), linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.8) 100%), url(${movie.poster})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}>

                <Nav bgColorFixed="bg-[#000]" bgColorGradient="bg-gradient-to-b from-[#000] to-[#00000048]" />

                <section className="pt-32 px-4 sm:px-10 md:px-20 xl:px-48 grid grid-cols-1 md:grid-cols-[minmax(300px,_1fr)_300px] lg:grid-cols-[minmax(500px,_1fr)_350px] 2xl:grid-cols-[minmax(700px,_1fr)_500px] gap-x-8 md:gap-x-20">
                    {/* Movie title + data */}
                    <article className="md:col-span-2 lg:col-span-1">
                        <h1 className="md:mb-14 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppinsSBd">{movie.title}</h1>
                        <div className="mt-6 w-full md:w-2/3 flex justify-between font-poppinsXLg">
                            <p>{movie.genre.join(" / ")}</p>
                            <p>&#x2022;</p>
                            <p>{movie.director}</p>
                            <p>&#x2022;</p>
                            <p>{movie.release.year}</p>
                        </div>
                    </article>

                    {/* Movie plot */}
                    <article className="md:col-start-1 md:col-end-2">
                        <p className="mt-14 mb-4 text-xl">{movie.plot}</p>
                        <p className="mb-10 text-sm font-poppinsThItalic">- plot summary by: <a href={movie.plotAuthor.link}>{movie.plotAuthor.name}</a></p>
                        {/* Button mit Trailer */}
                        <ButtonFilled buttonText="&#9655; Trailer" onClick={() => window.open(`https://www.imdb.com/video/${movie.trailerId}`, "_blank")} />

                    </article>

                    {/* Movie poster */}
                    <article className="mt-10 md:mt-14 lg:mt-0 row-start-2 row-end-3 md:col-start-2 md:col-end-3 lg:row-start-1 lg:row-end-4 content-center md:content-start lg:content-start">
                        <img src={movie.poster} alt="" className="max-h-[300px] md:max-h-[450px] xl:max-h-[700px] rounded-xl sm:shadow-light lg:shadow-strong" />
                    </article>

                    {/* Movie cast */}
                    <article className="my-12 px-8 py-2 w-full xl:w-2/3 bg-[#242424] flex flex-col divide-y divide-dashed divide-zinc-700 rounded-xl shadow-[8px_12px_21px_-2px_rgba(0,0,0,0.8)]">
                        <p className="py-4 font-poppinsBd text-2xl">Cast:</p>
                        {movie && movie.mainCast.map((creditItem) => {
                            const creditImage = creditItem.photo;
                            return (
                                <div className="py-3 flex gap-4 items-center font-poppinsXLgItalic text-lg" >
                                    <div className="w-16 h-16 rounded-full" style={{ backgroundImage: `url(${creditImage})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}></div>
                                    <p>{creditItem.name}</p>
                                </div>
                            )
                        })
                        }
                    </article>
                </section>
            </section>
        </>
    );
}

export default MovieDetails;