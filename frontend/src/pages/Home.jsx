import { useNavigate } from "react-router-dom";
import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Nav from "../components/Nav";
import homeBg from "../assets/img/cinema-bg.jpg";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <section className="min-h-screen bg-cover bg-no-repeat " style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0), rgba(20, 20, 20, 0.7), transparent), linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0.3), transparent), url(${homeBg})` }}>
                <Nav bgColorFixed="bg-[#000]" bgColorGradient="bg-gradient-to-b from-[#000] to-[#00000048]" />
                <section className="pt-32 px-4 sm:px-10 md:px-20 xl:px-48">
                    <article className="">
                        <h1 className="py-8 text-2xl sm:text-4xl lg:text-6xl xl:text-7xl leading-normal font-poppinsSBd ">Popcorn Cinema Central</h1>
                        <article className="sm:w-full lg:w-2/3 xl:w-1/2">
                            <p className="sm:mb-8 xl:mb-12 sm:text-xl xl:text-2xl font-poppinsXLgItalic">Your poppin' online movie database</p>
                            <p className="sm:text-base xl:text-lg">Check out (most of 😉) the greatest movies ever and read what they're all about. Get to know the main cast or even watch the official trailers.</p>
                            <p className="sm:mt-2 xl:mt-4">Grab your popcorn and let's go...</p>
                            <div className="my-6 flex flex-col sm:flex-row gap-6">
                                <ButtonOutline buttonText="Popular movies" onClick={() => handleNavigate("/popular-movies")} />
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