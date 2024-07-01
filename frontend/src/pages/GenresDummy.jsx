import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import moviePosterExample from "../assets/img/movie-bg-test.jpg";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useMoviesDummy } from "../context/MoviesDummyContext";

const Genres = () => {
    {/* ---------- OLD FOR API DATA ------------- */ }
    // const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    // const [genres, setGenres] = useState([]);
    {/* ---------- OLD FOR API DATA ------------- */ }

    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedGenreByDropdown, setSelectedGenreByDropdown] = useState("");
    const [selectedGenreByTopFive, setSelectedGenreByTopFive] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const navigate = useNavigate();
    const testMovies = useMoviesDummy();


    const genresList = ["All", "Action", "Adventure", "Thriller", "Sci-Fi", "Comedy", "Drama", "Biography", "Documentary", "Horror", "Western", "Romance", "Film Noir", "Family", "Fantasy", "Animation", "Crime", "History", "Music", "Musical", "Mystery", "Sport", "War"];
    const genresTopFive = ["Action", "Adventure", "Comedy", "Sci-Fi", "Thriller"];


    {/* ---------- OLD FOR API DATA ------------- */ }
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
    {/* ---------- OLD FOR API DATA ------------- */ }

    {/* Show all genres by default when first visiting the page and display page from top */ }
    useEffect(() => {
        handleSelectGenre("All");
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }, [])

    {/* Function for selecting a genre */ }
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
    });

    return (
        <>
            <section className="min-h-screen bg-cinema bg-contain bg-no-repeat bg-top">
                <Nav bgColorFixed="bg-[#000]" bgColorGradient="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 px-4 sm:px-10 md:px-20 xl:px-48">
                    <h1 className="py-8 md:mb-14 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppinsSBd">Movies by genre</h1>
                    {/* Top 5 genres */}
                    <article className="">
                        <p className="text-3xl font-poppinsXLgItalic">TOP 5 Genres</p>
                        <div className="mx-auto lg:mx-0 mt-6 lg:mt-4 max-w-lg sm:max-w-full lg:max-w-none grid items-center gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:grid-cols-5 text-center text-lg">
                            {genresTopFive && genresTopFive.map((genreItem, index) => (
                                <a key={index} className={classNames("p-2 rounded-xl sm:grid-rows-2 lg:row-span-1 lg:h-full w-full bg-[#fff] text-slate-950 hover:bg-rose-700 hover:text-[#fff] hover:cursor-pointer hover:border-rose-700 focus:outline-none focus:bg-rose-700 focus:text-[#fff]", { "sm:row-span-2": index === 2, "sm:h-28": index === 2, "sm:content-center": index === 2 })} href="" onClick={(e) => { e.preventDefault(); handleSelectGenre(genreItem, true) }}>{genreItem}</a>
                            ))}
                        </div>
                    </article>

                    {/* All genres */}
                    <article className="mt-16 p-4 rounded-xl bg-neutral-900">
                        <details className="w-full" id="genreDropdownMenu">
                            <summary className="w-full md:text-2xl lg:text-xl font-poppinsSBd hover:cursor-pointer">{selectedGenreByDropdown ? <>Selected genre: <span className="font-poppinsXLgItalic">{selectedGenreByDropdown}</span></> : "Select genre"}</summary>
                            <ul className="my-4 w-full rounded-xl dropdown-content menu z-[1] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-2 bg-neutral-900">
                                {genresList.map((genreItem, index) => (
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