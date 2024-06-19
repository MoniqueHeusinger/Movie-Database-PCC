import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import moviePosterExample from "../assets/img/movie-bg-test.jpg";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Genres = () => {
    // const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    // const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedGenreByDropdown, setSelectedGenreByDropdown] = useState("");
    const [selectedGenreByTopFive, setSelectedGenreByTopFive] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const navigate = useNavigate();


    const genres = ["All", "Action", "Adventure", "Thriller", "Sci-Fi", "Comedy", "Drama", "Biography", "Documentary", "Horror", "Western", "Romance", "Film Noir", "Family", "Fantasy", "Animation", "Crime", "History", "Music", "Musical", "Mystery", "Sport", "War"];
    const genresTopFive = ["Action", "Adventure", "Comedy", "Sci-Fi", "Thriller"];
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

    // useEffect(() => {
    //     fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', {
    //         method: 'GET',
    //         headers: {
    //             'x-rapidapi-key': API_KEY_MOVIEDB,
    //             'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    //         }
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setGenres(data.genres)
    //         })
    //         .catch((error) => console.log(error))
    // }, [])

    const handleSelectGenre = (genre, isTopFive) => {
        const scrollToGenreResultsSection = () => {
            const genreResultsSection = document.body.querySelector("#genreResults");
            if (genreResultsSection) {
                window.scrollTo({
                    top: genreResultsSection.offsetTop - 200,
                    behavior: "smooth",
                });
            }

        }
        scrollToGenreResultsSection()

        if (isTopFive) {
            setSelectedGenre(genre);
            setSelectedGenreByTopFive(genre);
            setSelectedGenreByDropdown(null)
        } else {
            setSelectedGenre(genre);
            setSelectedGenreByDropdown(genre);
            setSelectedGenreByTopFive(null);
        }


        const handleGenreFilter = () => {
            if (genre === "All") {
                const showAllMovies = testMovies.slice().sort((a, b) => a.title.localeCompare(b.title));
                setFilteredMovies(showAllMovies);
            } else {
                const filteredResults = testMovies.filter(movie => movie.genre.includes(genre));
                setFilteredMovies(filteredResults);
            }
        }
        handleGenreFilter();

    };

    window.addEventListener("click", function (e) {
        const dropdownMenuElement = document.body.querySelector("#genreDropdownMenu");
        if (!dropdownMenuElement.contains(e.target)) {
            dropdownMenuElement.open = false;
        }
    })

    return (
        <>

            <section className="min-h-screen bg-genre-bg-default bg-cover bg-no-repeat">
                <Nav bgColorFixed="bg-[#000]" bgColorGradient="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 px-20">
                    <h1 className="text-6xl font-poppinsSBd">Movies by genre</h1>
                    {/* Top 5 genres */}
                    <article className="mt-20">
                        <p className="text-3xl font-poppinsXLgItalic">TOP 5 Genres</p>
                        <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-4 sm:max-w-xl sm:grid-cols-6 sm:gap-x-6 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-center text-lg">
                            {genresTopFive && genresTopFive.map((genreItem, index) => (
                                <a key={index} className="p-2 rounded-xl col-span-2 lg:col-span-1 w-full bg-[#fff] text-slate-950 hover:bg-rose-700 hover:text-[#fff] hover:cursor-pointer hover:border-rose-700 focus:outline-none focus:bg-rose-700 focus:text-[#fff]" href="" onClick={(e) => { e.preventDefault(); handleSelectGenre(genreItem, true) }}>{genreItem}</a>
                            ))}
                        </div>
                    </article>

                    {/* All genres */}
                    <article className="mt-16 p-4 rounded-xl bg-neutral-900">
                        <details className="w-full" id="genreDropdownMenu">
                            <summary className="w-full text-xl font-poppinsSBd hover:cursor-pointer">{selectedGenreByDropdown ? <>Selected genre: <span className="font-poppinsXLgItalic">{selectedGenreByDropdown}</span></> : "Select genre"}</summary>
                            <ul className="my-4 w-full rounded-xl dropdown-content menu z-[1] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 bg-neutral-900">
                                {genres.map((genreItem, index) => (
                                    <li key={index}><a href="" className="font-poppinsLg text-lg hover:bg-rose-700 focus:outline-none focus:bg-rose-700" onClick={(e) => { e.preventDefault(); handleSelectGenre(genreItem, false) }}>{genreItem}</a></li>
                                ))}
                            </ul>
                        </details>
                    </article>

                    {/* Genre result content */}
                    <article className="mt-20 pb-32 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8" id="genreResults">

                        {/* Example cards */}
                        {filteredMovies && filteredMovies.map((movieItem, index) => (
                            <div className="h-72 rounded-xl relative group" key={index}>
                                {/* Image */}
                                <figure className="relative h-full">
                                    <img src={movieItem.poster} alt="" className="w-full h-full object-cover object-top rounded-xl group-hover:opacity-50 transition-all" />
                                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"></div>
                                </figure>
                                {/* Title + button */}
                                <div className="flex flex-col items-center p-4 absolute left-0 right-0 bottom-0 h-1/2 bg-[#1c1c1c] rounded-b-xl opacity-0 group-hover:opacity-100 bg-opacity-9 transition-all gap-y-4">
                                    <h2 className={classNames("text-center font-poppinsSBd", {
                                        "text-2xl": movieItem.title.length < 20,
                                        "text-lg": movieItem.title.length >= 21,
                                        "text-sm": movieItem.title.length >= 35
                                    })}>{movieItem.title}</h2>
                                    <div className="flex flex-nowrap gap-4">
                                        <ButtonOutline buttonText="More" onClick={() => navigate(`/movie/${movieItem.id}`)} />
                                        <ButtonFilled buttonText="&#9655; Trailer" onClick={() => window.open(`https://www.imdb.com/video/${movieItem.trailerId}`, "_blank")} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </article>
                </section>
            </section>
        </>
    );
}

export default Genres;