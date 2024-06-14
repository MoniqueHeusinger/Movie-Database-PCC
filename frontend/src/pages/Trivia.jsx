import Nav from "../components/Nav";
import searchIcon from "../assets/img/icons/lupe-icon.png"
import { useEffect, useState } from "react";
import classNames from "classnames";
import testMoviePic from "../assets/img/movie-bg-test.jpg"

const Trivia = () => {
    const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': API_KEY_MOVIEDB,
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


    return (
        <>
            <Nav />
            <section className="mt-32 px-20 py-10">
                <h1 className="pb-10 text-6xl font-poppinsSBd">Trivia</h1>


                <section className="grid grid-cols-2 divide-x">
                    <article>
                        <p className="mb-8 text-2xl font-poppinsXLgItalic">Get all the juicy insights on top movies</p>
                        <label htmlFor="" className="p-4 border-2 flex items-center gap-2 w-fit rounded-lg">
                            <input type="text" className="w-96 bg-transparent outline-none text-lg" placeholder="Search movie" />
                            <img src={searchIcon} alt="" className="w-6" />
                        </label>
                    </article>

                    {/* Top 3 movies */}
                    {/* {movies.data && movies.data.movies.edges.map((movieItem, index) => (
                        <article key={index} className="rounded-lg relative hover:scale-110 transition-all shadow-xl hover:cursor-pointer">
                            {/* movie poster */}
                    {/* <a href="#" className="">
                                <img
                                    alt=""
                                    src={testMoviePic}
                                    // src={movieItem.node.primaryImage.url}
                                    className="h-[250px] rounded-lg object-cover"
                                />
                            </a>
                        </article>
                    ))} */}


                    <article className="pl-20 grid grid-cols-3 grid-rows-[50px] hover:cursor-pointer">
                        <p className="col-span-full text-2xl font-poppinsSBd ">Popular movies:</p>
                        {/* movie poster */}
                        <a href="#" className="">
                            <img
                                alt=""
                                src={testMoviePic}
                                // src={movieItem.node.primaryImage.url}
                                className="h-[200px] rounded-lg object-cover"
                            />
                        </a>

                        <a href="#" className="">
                            <img
                                alt=""
                                src={testMoviePic}
                                // src={movieItem.node.primaryImage.url}
                                className="h-[200px] rounded-lg object-cover"
                            />
                        </a>

                        <a href="#" className="">
                            <img
                                alt=""
                                src={testMoviePic}
                                // src={movieItem.node.primaryImage.url}
                                className="h-[200px] rounded-lg object-cover"
                            />
                        </a>
                    </article>


                </section>

            </section >
        </>
    );
}

export default Trivia;