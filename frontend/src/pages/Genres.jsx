import { useEffect, useState } from "react";
import Nav from "../components/Nav";

const Genres = () => {
    const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        fetch('https://imdb8.p.rapidapi.com/title/list-popular-genres', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY_MOVIEDB,
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setGenres(data.genres)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Nav />
            <section className="mt-32 px-20 py-10">
                <h1 className="text-4xl font-poppinsSBd">Movies by genre</h1>
                <article className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 text-center text-md">
                    {genres && genres.map((genreItem, index) => (
                        <a key={index} className="border-2 border-rose-50 p-4 rounded-xl col-span-2 lg:col-span-1 w-full hover:cursor-pointer active:bg-rose-700 hover:border-rose-700">{genreItem.description}</a>
                    ))}
                </article>

            </section>
        </>
    );
}

export default Genres;