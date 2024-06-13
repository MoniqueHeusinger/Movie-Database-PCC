import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import starIcon from "../assets/img/icons/stern-icon.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const TopTwentyMoviesList = () => {
    const API_KEY_GENRES = import.meta.env.VITE_API_KEY_GENRES;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY_GENRES,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })
            .then((res) => {
                return res.json()
            })
            .then((info) => {
                setMovies(info)
            })
            .catch((error) => console.log(error))
    }, [])

    const handleMovieClick = (event, movieItem) => {
        event.preventDefault();
        navigate(`/movie/${movieItem.node.id}`, { state: { movie: movieItem } });
    };

    console.log("movies.data: ", movies.data);

    return (
        <>
            <Nav />
            <section className="px-20 py-10">
                <h1 className="text-6xl font-poppinsSBd leading-loose">Popping right now</h1>
                <h2 className="text-2xl">Top 20 Movies</h2>
                <section className="mx-auto mt-10 grid grid-cols-1 max-w-lg grid-cols-4 items-center gap-x-8 gap-y-16 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 text-center text-md">

                    {/* movie cards */}
                    {movies.data && movies.data.movies.edges.map((movieItem, index) => (
                        <article key={index} className="rounded-lg relative hover:scale-110 transition-all shadow-xl hover:cursor-pointer" onClick={(event) => handleMovieClick(event, movieItem)}>
                            {/* movie poster */}
                            <a href="#" className="">
                                <img
                                    alt=""
                                    src={movieItem.node.primaryImage.url}
                                    className="h-[350px] w-full rounded-lg object-cover"
                                />
                            </a>
                            {/* container for title + data */}
                            <div className="movie-data-container pt-12 pb-1 rounded-b-lg bg-gradient-to-t from-[#000] via-[#000000ed] to-[#00000000] absolute bottom-0 left-0 right-0">
                                {/* movie title */}
                                <p className={classNames('pt-2 px-2 font-poppinsSBd', {
                                    'md:text-sm': movieItem.node.titleText.text.length > 20, 'lg:text-base': movieItem.node.titleText.text.length <= 30, 'lg:text-xl': movieItem.node.titleText.text.length <= 20,
                                    'md:text-lg': movieItem.node.titleText.text.length <= 20
                                })}>{movieItem.node.titleText.text}</p>

                                {/* movie data */}
                                <div className="my-1 px-2 flex justify-between items-center font-poppinsLg text-xs">
                                    <p className="leading-none self-center">{movieItem.node.titleGenres.genres[0].genre.text}</p>
                                    {movieItem.node.ratingsSummary.aggregateRating &&
                                        <div className="flex gap-1 items-center">
                                            <img src={starIcon} alt="" className="w-3.5 h-3.5" />
                                            <p className="self-center leading-none">{movieItem.node.ratingsSummary.aggregateRating}</p>
                                        </div>
                                    }
                                    <p className="leading-none self-center">{movieItem.node.releaseYear.year}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

            </section>
        </>
    );
}

export default TopTwentyMoviesList;