import { createContext, useContext } from "react";
import testMovies from "../data/movie-data-dummy.js";

const MoviesDummyContext = createContext();

export const MoviesDummyProvider = ({ children }) => {
    return (
        <MoviesDummyContext.Provider value={testMovies}>
            {children}
        </MoviesDummyContext.Provider>
    );
};

export const useMoviesDummy = () => useContext(MoviesDummyContext);