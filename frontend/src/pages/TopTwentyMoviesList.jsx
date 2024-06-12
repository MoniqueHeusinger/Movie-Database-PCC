import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import popcornWhite from "../assets/img/icons/popcorn-icon-white.png";
import ButtonOutline from "../components/ButtonOutline";
import ButtonFilled from "../components/ButtonFilled";

const TopTwentyMoviesList = () => {
    const API_KEY_GENRES = import.meta.env.VITE_API_KEY_GENRES;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY_GENRES,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })
            .then((res) => {
                // console.log("Respose: ", res);
                return res.json()
            })
            .then((info) => {
                console.log("das ist info: ", info);
                setMovies(info)
                // setGenres(data.genres)
            })
            .catch((error) => console.log(error))
    }, [])

    // console.log(movies.data.movies.edges[0].node.originalTitleText.text);
    console.log("movies.data.movies.edges: ", movies.data);

    return (
        <>
            <Nav />
            <section className="px-20 py-10">
                <h1 className="text-4xl font-poppinsSBd">Top 20 Movies by genre</h1>
                <article className="mx-auto mt-10 grid grid-cols-1 max-w-lg grid-cols-4 items-center gap-x-8 gap-y-16 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4 xl:grid-cols-5 text-center text-md">

                    {movies.data && movies.data.movies.edges.map((movieItem, index) => (
                        <article key={index} className="rounded-lg group">
                            <a href="#" className="rounded-lg ">
                                <img
                                    alt=""
                                    src={movieItem.node.primaryImage.url}
                                    className="h-[350px] w-full rounded-md object-cover hover:scale-110 hover:rounded-t-md transition-all"
                                />
                            </a>
                            <p className="mt-4 py-4 text-md font-poppinsSBd hidden group-hover:block bg-[#fff] text-slate-950 scale-110 rounded-b-md">{movieItem.node.originalTitleText.text}</p>
                            <div className="flex flex-col mt-4">
                                {/* <ButtonOutline buttonText="more Info" />
                                <ButtonFilled buttonText="Watch now" /> */}
                            </div>
                        </article>
                    ))}
                </article>

            </section>
        </>
    );
}

export default TopTwentyMoviesList;