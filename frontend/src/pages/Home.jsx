import { useNavigate } from "react-router-dom";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Nav from "../components/Nav";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <section className="h-screen bg-home-bg-default bg-cover bg-no-repeat ">
                <Nav bgColorFixed="bg-[#000]" bgColorGradient="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 px-20">
                    <article className="">
                        <h1 className="py-8 sm:text-xl md:text-4xl lg:text-7xl font-poppinsSBd ">Popcorn Cinema Central</h1>
                        <article className="sm:w-full lg:w-2/3 xl:w-1/2">
                            <p className="sm:mb-8 xl:mb-12 sm:text-xl xl:text-2xl font-poppinsXLgItalic">Your poppin' online movie database</p>
                            <p className="sm:text-base xl:text-lg">Check out (most of 😉) the greatest movies ever and get interesting insights on ratings and awards or watch the official trailers.</p>
                            <p className="sm:mt-2 xl:mt-4">Grab your popcorn and let's go...</p>
                            <div className="my-6 flex gap-6">
                                <ButtonOutline buttonText="Browse Top 20" onClick={() => handleNavigate("/top-twenty")} />
                                <ButtonFilled buttonText="Select by genre" onClick={() => handleNavigate("/genres")} />
                            </div>
                        </article>
                    </article>
                </section>
            </section >





        </>
    );
}

export default Home;