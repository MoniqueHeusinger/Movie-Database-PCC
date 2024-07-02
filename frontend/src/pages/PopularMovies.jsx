import { useEffect, useState } from "react";
import Nav from "../components/Nav";
// import starIcon from "../assets/img/icons/stern-icon.png";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useMoviesDummy } from "../context/MoviesDummyContext";
import cinemaBg from "../assets/img/cinema_seats.jpg";

const PopularMovies = () => {
    const API_KEY_MOVIEDB = import.meta.env.VITE_API_KEY_MOVIEDB;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const [firstScrollLeft, setFirstScrollLeft] = useState(true);
    const [firstScrollRight, setFirstScrollRight] = useState(true);
    const testMovies = useMoviesDummy();

    const SCROLL_AMOUNT_LARGE = 800;
    const SCROLL_AMOUNT_SMALL = 400;

    // Function to determine scroll amount based on screen width
    const getScrollAmountByScreenSize = () => {
        return window.innerWidth < 1024 ? SCROLL_AMOUNT_SMALL : SCROLL_AMOUNT_LARGE;
    };

    // Event handler for scrolling right
    const scrollRight = () => {
        const carousel = document.querySelector("#carousel");
        if (carousel) {
            const scrollAmount = firstScrollRight ? 150 : getScrollAmountByScreenSize();
            carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
            setShowLeftButton(true);
            setFirstScrollRight(false);
        }
    };

    // Event handler for scrolling left
    const scrollLeft = () => {
        const carousel = document.querySelector("#carousel");
        if (carousel) {
            const scrollAmount = firstScrollLeft ? 150 : getScrollAmountByScreenSize();
            carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            setFirstScrollLeft(false);
        }
    };

    // Check the scroll position to show/hide left button
    const checkScrollPosition = () => {
        const carousel = document.body.querySelector("#carousel");
        if (carousel) {
            // Calculate max. scroll position
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

            // Check, if left button is displayed
            if (carousel.scrollLeft > 100) {
                setShowLeftButton(true);
            } else {
                setShowLeftButton(false);
            }

            // Check, if right button is displayed
            if (carousel.scrollLeft < maxScrollLeft - 100) {
                setShowRightButton(true);
            } else {
                setShowRightButton(false)
            }
        }

    };

    // Attach the scroll event listener
    useEffect(() => {
        const carousel = document.querySelector("#carousel");
        if (carousel) {
            carousel.addEventListener("scroll", checkScrollPosition);
            return () => carousel.removeEventListener("scroll", checkScrollPosition);
        }
    }, []);

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

    // console.log("movies.data: ", movies.data);


    return (
        <>
            <section className="min-h-screen bg-cover bg-no-repeat bg-bottom" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), url(${cinemaBg})` }}>
                <Nav bgColorFixed="bg-[#000]" bgColor="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 pb-14 px-4 sm:px-10 md:px-20 xl:px-48">
                    <h1 className="py-8 md:mb-14 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppinsSBd">Popping right now</h1>
                    <h2 className="font-poppinsXLgItalic text-3xl">Top 10 Movies</h2>
                    <section className="mx-auto mt-10 text-md relative overflow-hidden bg-[#000000b7] rounded-xl">
                        {/* < Left button container */}
                        <div className={classNames("absolute top-0 left-0 pr-16 w-fit h-full flex bg-gradient-to-r from-[#000] via-[#000] to-[transparent] items-center z-20 transition-all", { "hidden": !showLeftButton })}>
                            <div className="w-4 h-full bg-[#000]"></div>
                            <a className="btn btn-circle hover:bg-[#FD0054] hover:border-none transition-all" onClick={scrollLeft}>❮</a>
                        </div>

                        {/*  > Right button container */}
                        <div className={classNames("absolute top-0 right-0 pl-16 w-fit h-full flex bg-gradient-to-l from-[#000] via-[#000] to-[transparent] items-center z-20 transition-all", { "hidden": !showRightButton })}>
                            <a className="btn btn-circle hover:bg-[#FD0054] hover:border-none transition-all" onClick={scrollRight}>❯</a>
                            <div className="w-4 h-full bg-[#000]"></div>
                        </div>

                        {/* Carousel */}
                        <article className="pl-20 pr-16 py-8 carousel carousel-center max-w-full rounded-box gap-x-14 overflow-x-auto" id="carousel">
                            {testMovies && testMovies.map((movieItem, index) => (
                                <>
                                    <div key={index} className="carousel-item items-center" id={`slide${index + 1}`}>
                                        <p key={index} className="font-freeman sm:text-[180px] lg:text-[240px] leading-none text-neutral-800 font-outline-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8 mr-[-27px]">{index + 1}</p>
                                        {/* Card with poster */}
                                        <div className="hover:scale-105 transition-all">
                                            <a className="relative cursor-pointer group" onClick={() => navigate(`/movie/${movieItem.id}`)}>
                                                <img src={movieItem.poster} alt={movieItem.title} className="h-[200px] lg:h-[270px] rounded-xl border border-[#000]" />
                                                {/* Overlay with title */}
                                                <p className={classNames("p-2 absolute flex justify-center items-end group-hover:h-1/3 inset-x-0 bottom-0 rounded-b-xl text-center font-poppinsSBd bg-gradient-to-t from-[#000] via-[#000000e9] to-[transparent] opacity-0 group-hover:opacity-95 transition-all", { "text-xl": movieItem.title.length < 20, "text-sm": movieItem.title.length >= 20 })}>{movieItem.title}</p>
                                            </a>
                                        </div>
                                    </div >
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
                        {/* ---------- OLD FOR API DATA ------------- */}
                    </section>

                </section>
            </section >

        </>
    );
}

export default PopularMovies;