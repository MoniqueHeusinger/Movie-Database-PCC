import ButtonFilled from "../components/ButtonFilled";
import ButtonOutline from "../components/ButtonOutline";
import Nav from "../components/Nav";

const Home = () => {
    return (
        <>
            {/* äußere Section */}
            <section className="h-screen bg-test-shadow bg-cover bg-no-repeat ">
                <Nav />

                {/* innere Section für Titel + Text + Buttons */}
                <section className="px-20">
                    <article className="">
                        <h1 className="py-8 text-8xl font-poppinsSBd  ">Bad Boys For Life</h1>
                        <article className="w-1/2">
                            <div className="my-4 flex gap-6 text-xs divide-x">
                                <p>8.2 (12.554)</p>
                                <p className="pl-6">2021</p>
                                <p className="pl-6">1 h 24 min</p>
                                <p className="pl-6">Sci-Fi</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, excepturi blanditiis temporibus rem doloremque reiciendis magnam ad, quisquam reprehenderit obcaecati doloribus ipsam repellendus alias quidem rerum, voluptates fuga ipsum laudantium.</p>
                            <div className="flex gap-6">
                                <ButtonOutline />
                                <ButtonFilled />
                            </div>
                        </article>

                    </article>
                </section>
            </section>





        </>
    );
}

export default Home;