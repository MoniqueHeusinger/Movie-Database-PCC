import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import starIcon from "../assets/img/icons/stern-icon.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const PopularMovies = () => {
    const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const testMovies = [
        { "id": "tt0096895", "title": "Batman", "genre": ["Action", "Sci-Fi"], "trailerId": "vi2568602905", "poster": "https://m.media-amazon.com/images/M/MV5BNTQzN2EzMzYtNzIzMy00YTU5LTlhMmYtZmQ3ODc0MjJhYTMzXkEyXkFqcGdeQXVyMTY5NzgyMDU3._V1_FMjpg_UY726_.jpg " },
        { "id": "tt6146586", "title": "John Wick 3", "genre": ["Action"], "trailerId": "vi3978017305", "poster": "https://m.media-amazon.com/images/M/MV5BMTE4NmVmNTctMjNlZi00ODQwLTgxYmYtOGZhNzFlOTA0ODRiXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UY678_.jpg " },
        { "id": "tt2911666", "title": "John Wick", "genre": ["Action"], "trailerId": "vi2273816345", "poster": "https://m.media-amazon.com/images/M/MV5BMmU1ZTAzMWItYjA1Yi00Njk2LWEwNjUtMThiMDk2MzZiNjMwXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_FMjpg_UX410_.jpg " },
        { "id": "tt8367814", "title": "The Gentlemen", "genre": ["Action", "Drama", "Biography", "Documentary", "Romance", "Film Noir",], "trailerId": "vi1990573593", "poster": "https://m.media-amazon.com/images/M/MV5BOTNjMzcwNmYtOTQ5Ni00ZDNjLWFmYjEtNTQ1MjE0NTUzNWIxXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UY679_.jpg" },
        { "id": "tt0101701", "title": "Des Wahnsinns Fette Beute", "genre": ["Comedy", "Family", "Fantasy"], "trailerId": "vi1093845017", "poster": "https://m.media-amazon.com/images/M/MV5BYzM3NjgxMDEtNWQyMi00MGYzLWI0YTMtOGZhMjRkYWNiYmUwXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_FMjpg_UY873_.jpg" },
        { "id": "tt0102070", "title": "Hudson Hawk", "genre": ["Comedy"], "trailerId": "vi2224029977", "poster": "https://m.media-amazon.com/images/M/MV5BNzhlN2Q1MTktZGU3Yi00Y2Q2LTliZmYtNWQ0NTEzOTAyMTQ2XkEyXkFqcGdeQXVyNjkwOTQ4MDE@._V1_FMjpg_UY720_.jpg" },
        { "id": "tt0421073", "title": "Street Kings", "genre": ["Action", "Thriller"], "trailerId": "vi1790050585", "poster": "https://m.media-amazon.com/images/M/MV5BNDkyMGMwNmEtOGQ3OC00Nzk3LTgyZTctMTkyYmEwOGVmODExXkEyXkFqcGdeQXVyNjk3NDczNTM@._V1_FMjpg_UY640_.jpg" },
        { "id": "tt0147800", "title": "10 Dinge, Die Ich An Dir Hasse", "genre": ["Comedy", "Romance"], "trailerId": "vi3917792793", "poster": "https://m.media-amazon.com/images/M/MV5BOTY5NGEwZDgtZDVhZC00NjVhLTk1YjktODQ3NDBiZTU1MDIzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg" },
        { "id": "tt0081777", "title": "Xanadu", "genre": ["Music", "Musical", "Family", "Fantasy"], "trailerId": "vi3923902745", "poster": "https://m.media-amazon.com/images/M/MV5BYTlkNWQyMjAtZGE2Yi00YWU2LWI5N2EtOGIwYjJjOTkxNzNhXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY740_.jpg" },
        { "id": "tt0094012", "title": "Spaceballs", "genre": ["Comedy", "Adventure", "History", "War"], "trailerId": "vi2559229721", "poster": "https://m.media-amazon.com/images/M/MV5BYzhiODlkZTctMDUxOC00Mjg4LWIzNWMtZjIzMmEzNmYyOWYwXkEyXkFqcGdeQXVyNjkwOTQ4MDE@._V1_FMjpg_UY720_.jpg" }];

    const countTwenty = 1;

    //--------------- OLD FOR API-DATA ---------------------
    // useEffect(() => {
    //     fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US', {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': API_KEY_MOVIEDB,
    //             'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    //         }
    //     })
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((info) => {
    //             setMovies(info)
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    // const handleMovieClick = (event, movieItem) => {
    //     event.preventDefault();
    //     navigate(`/movie/${movieItem.node.id}`, { state: { movie: movieItem } });
    // };

    console.log("movies.data: ", movies.data);

    return (
        <>
            <section className="min-h-screen bg-cinema bg-cover bg-no-repeat">
                <Nav bgColorFixed="bg-[#000]" bgColor="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 px-20">
                    <h1 className="text-6xl font-poppinsSBd leading-loose">Popping right now</h1>
                    <h2 className="text-2xl">Top 10 Movies</h2>
                    <section className="mx-auto mt-10 text-md">
                        {/* <section className="mx-auto mt-10 grid grid-cols-1 max-w-lg grid-cols-4 items-center gap-x-8 gap-y-16 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 text-center text-md"> */}


                        <article className="pb-16 carousel rounded-box gap-x-14">
                            {testMovies && testMovies.map((movieItem, index) => (
                                <>
                                    <div key={index} className="carousel-item items-center">
                                        <p className="font-freeman text-[240px] leading-none text-neutral-800 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8 mr-[-27px]">{index + 1}</p>
                                        <div>
                                            <a className="cursor-pointer" onClick={() => navigate(`/movie/${movieItem.id}`)}><img src={movieItem.poster} alt={movieItem.title} className="w-48 rounded-xl hover:scale-105 transition-all" /></a>
                                        </div>
                                    </div>
                                </>
                            ))}

                        </article>

                        {/* ---------- OLD FOR API DATA ------------- */}
                        {/* movie cards */}
                        {/* {movies.data && movies.data.movies.edges.map((movieItem, index) => (
                            <article key={index} className="rounded-lg relative hover:scale-110 transition-all shadow-xl hover:cursor-pointer" onClick={(event) => handleMovieClick(event, movieItem)}> */}
                        {/* movie poster */}
                        {/* <a href="#" className="">
                                    <img
                                        alt=""
                                        src={movieItem.node.primaryImage.url}
                                        className="h-[350px] w-full rounded-lg object-cover"
                                    />
                                </a> */}
                        {/* container for title + data */}
                        {/* <div className="movie-data-container pt-12 pb-1 rounded-b-lg bg-gradient-to-t from-[#000] via-[#000000ed] to-[#00000000] absolute bottom-0 left-0 right-0"> */}
                        {/* movie title */}
                        {/* <p className={classNames('pt-2 px-2 font-poppinsSBd', {
                                        'md:text-sm': movieItem.node.titleText.text.length > 20, 'lg:text-base': movieItem.node.titleText.text.length <= 30, 'lg:text-xl': movieItem.node.titleText.text.length <= 20,
                                        'md:text-lg': movieItem.node.titleText.text.length <= 20
                                    })}></p> */}

                        {/* movie data */}
                        {/* <div className="my-1 px-2 flex justify-between items-center font-poppinsLg text-xs">
                                        <p className="leading-none self-center"></p>
                                        {movieItem.node.ratingsSummary.aggregateRating &&
                                            <div className="flex gap-1 items-center">
                                                <img src={starIcon} alt="" className="w-3.5 h-3.5" />
                                                <p className="self-center leading-none"></p>
                                            </div>
                                        }
                                        <p className="leading-none self-center"></p>
                                    </div>
                                </div>
                            </article>
                        ))} */}
                    </section>

                </section>
            </section>

        </>
    );
}

export default PopularMovies;