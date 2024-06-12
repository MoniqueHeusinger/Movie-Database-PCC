import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const NewMovies = () => {
    return (
        <>
            <Nav />
            <h1 className="my-10">New Movies here</h1>
            <Link to="/">zurück zu Home</Link>

        </>
    );
}

export default NewMovies;