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


    const genres = ["Action", "Adventure", "Thriller", "Sci-Fi", "Comedy", "Drama", "Biography", "Documentary", "Horror", "Western", "Romance", "Film Noir", "Family", "Fantasy", "Animation", "Crime", "History", "Music", "Musical", "Mystery", "Sport", "War"];
    const genresTopFive = ["Action", "Adventure", "Comedy", "Sci-Fi", "Thriller"];
    const testMovies = [
        { "id": "tt1", "title": "Madmax", "genre": ["Action", "Sci-Fi"], "trailerId": "vi961986073" },
        { "id": "tt2", "title": "Matrix", "genre": ["Action", "Sci-Fi"], "trailerId": "vi3740270873" },
        { "id": "tt3", "title": "John Wick", "genre": ["Action"], "trailerId": "vi2273816345" },
        { "id": "tt4", "title": "A Very Long Movie Title", "genre": ["Drama", "Biography", "Documentary", "Horror", "Western", "Romance", "Film Noir",], "trailerId": "vi961986073" },
        { "id": "tt5", "title": "Banana Joe And Friends", "genre": ["Western", "Comedy", "Family", "Fantasy", "Animation", "History"], "trailerId": "vi2273816345" },
        { "id": "tt6", "title": "Hudson Hawk", "genre": ["Comedy"], "trailerId": "vi2224029977" },
        { "id": "tt7", "title": "Street Kings", "genre": ["Action", "Thriller"], "trailerId": "vi1790050585" },
        { "id": "tt8", "title": "10 Dinge, Die Ich An Dir Hasse", "genre": ["Comedy", "Romance"], "trailerId": "vi3917792793" },
        { "id": "tt9", "title": "A rediciolous long unnecessary strange movie title to be set here", "genre": ["Comedy", "Drama", "Adventure", "Music", "Musical", "Mystery", "Sport", "War", "Crime"], "trailerId": "vi961986073" }]

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

        const filteredResults = testMovies.filter(movie => movie.genre.includes(genre));
        setFilteredMovies(filteredResults);
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
                <Nav bgColor="bg-gradient-to-b from-[#000] to-[#00000048]" />
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
                                    <img src={moviePosterExample} alt="" className="w-full h-full object-cover object-top rounded-xl group-hover:opacity-50 transition-all" />
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