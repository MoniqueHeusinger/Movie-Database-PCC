import popcornIcon from "../assets/img/icons/popcorn-icon-rose-700.png";
import magnifyingGlass from "../assets/img/icons/lupe-icon.png";
import { NavLink, Link } from "react-router-dom";
import classNames from "classnames";

const Nav = ({ bgColor }) => {
    return (
        <>
            {/* box-shadow und bg-color dynamisch übergeben */}
            <section className="relative">
                {/* <article className="px-20 py-8 flex justify-between items-center fixed top-0 left-0 right-0 shadow-xl z-50"> */}
                <article className={classNames("px-20 py-8 flex justify-between items-center fixed top-0 left-0 right-0 shadow-xl z-50", bgColor)}>
                    <article className="flex">
                        <Link to="/"><img src={popcornIcon} alt="" className="size-12" /></Link>
                        <div>
                            <p className="text-xs/4">Popcorn</p>
                            <p className="text-xs/4">Cinema</p>
                            <p className="text-xs/4">Central</p>
                        </div>
                    </article>

                    <nav>
                        <ul className="flex gap-10">
                            <li><NavLink to="/" className="pb-2 hover:border-b-2">Home</NavLink></li>
                            {/* <li><NavLink to="/new-movies" className="pb-2 hover:border-b-2">New Movies</NavLink></li> */}
                            <li><NavLink to="/top-twenty" className="pb-2 hover:border-b-2">Top 20</NavLink></li>
                            <li><NavLink to="/trivia" className="pb-2 hover:border-b-2">Trivia</NavLink></li>
                            {/* <li><NavLink to="/genres" className="mr-2 pb-2 hover:border-b-2">Genres</NavLink></li> */}
                            {/* <li><NavLink to="/coming-soon" className="mr-2 pb-2 hover:border-b-2">Coming soon</NavLink></li> */}
                            <li className="pl-8 border-l-2"><Link className=""><img src={magnifyingGlass} alt="Search" className="ml-2 size-5 " /></Link></li>
                        </ul>
                    </nav>
                </article>

            </section>
        </>);
}

export default Nav;