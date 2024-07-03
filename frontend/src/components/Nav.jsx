import popcornIcon from "../assets/img/icons/popcorn-icon-rose-700.png";
import magnifyingGlass from "../assets/img/icons/lupe-icon.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useMoviesDummy } from "../context/MoviesDummyContext";

const Nav = ({ bgColorGradient, bgColorFixed }) => {
    const [isWindowScrolled, setIsWindowScrolled] = useState(false);
    const [searchMatchFound, setSearchMatchFound] = useState(false);
    const [searchResults, setSearchResults] = useState([])

    const testMovies = useMoviesDummy();
    const navigate = useNavigate();


    useEffect(() => {
        const handleWindowScroll = () => {
            const isScrolled = window.scrollY > 60;
            if (isScrolled !== isWindowScrolled) {
                setIsWindowScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleWindowScroll);

        return () => {
            window.removeEventListener("scroll", handleWindowScroll)
        }
    }, [isWindowScrolled])

    // Search function
    useEffect(() => {
        const searchInput = document.body.querySelector("#searchInputField");

        const handleSearchInput = (e) => {
            const searchValue = e.target.value.toLowerCase();
            if (searchValue === "") {
                setSearchMatchFound(false);
                setSearchResults([]);
                return;
            }

            const foundMatches = testMovies.filter(movie => movie.title.toLowerCase().includes(searchValue));
            setSearchResults(foundMatches);
            setSearchMatchFound(foundMatches.length > 0);
        };

        if (searchInput) {
            searchInput.addEventListener("input", handleSearchInput);

            return () => {
                searchInput.removeEventListener("input", handleSearchInput);
            };
        }
    }, [testMovies])

    return (
        <>
            <section className="">
                <article className={classNames("px-4 sm:px-10 md:px-20 xl:px-48 py-8 flex justify-between items-center fixed top-0 left-0 right-0 shadow-xl z-50", { [bgColorGradient]: !isWindowScrolled, [bgColorFixed]: isWindowScrolled })}>
                    {/* Logo */}
                    <article className="flex">
                        <Link to="/"><img src={popcornIcon} alt="" className="size-12" /></Link>
                        <div>
                            <p className="text-xs/4">Popcorn</p>
                            <p className="text-xs/4">Cinema</p>
                            <p className="text-xs/4">Central</p>
                        </div>
                    </article>

                    {/* Searchbar */}
                    <article className="relative">
                        <label className="input input-bordered flex items-center gap-2 rounded-xl">
                            <input type="search" className="grow" placeholder="Search" id="searchInputField" />
                            <img src={magnifyingGlass} alt="Search" className="size-6 " />
                        </label>

                        {/* Search results */}
                        <div className={classNames("absolute px-2 py-6 w-full max-h-80 flex flex-col gap-4 bg-[#000] font-poppinsLg rounded-b-xl overflow-auto transition-opacity shadow-xl", { "opacity-100": searchMatchFound, "opacity-0": !searchMatchFound })}>
                            {searchResults && searchResults.map((movieItem, index) => (
                                <div key={index} className="card card-side w-11/12 cursor-pointer bg-neutral-700 hover:scale-105" onClick={() => navigate(`/movie/${movieItem.id}`)}>
                                    <div className="card-body p-4">
                                        <p className={classNames("card-title", { "text-base": movieItem.title.length <= 17, "text-sm": movieItem.title.length > 17 })}>{movieItem.title}</p>
                                    </div>
                                    <div className="basis-12 rounded-r-xl" style={{ backgroundImage: `url(${movieItem.poster})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                                    {/* <figure>
                                        <img src={movieItem.poster} alt="" className="h-16" />
                                    </figure> */}
                                </div>
                            ))}
                        </div>
                    </article>

                    {/* Main nav bar */}
                    <nav>
                        <ul className="flex gap-10">
                            <li><NavLink to="/" className="pb-2 hover:border-b-2">Home</NavLink></li>
                            <li><NavLink to="/popular-movies" className="pb-2 hover:border-b-2">Popular</NavLink></li>
                            {/* <li><NavLink to="/trivia" className="pb-2 hover:border-b-2">Trivia</NavLink></li> */}
                            <li><NavLink to="/genres" className="mr-2 pb-2 hover:border-b-2">Genres</NavLink></li>
                        </ul>
                    </nav>
                </article>

            </section>
        </>);
}

export default Nav;