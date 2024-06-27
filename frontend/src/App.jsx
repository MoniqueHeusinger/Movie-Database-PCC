import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TopTwentyMoviesList from './pages/TopTwentyMoviesList';
import GenresDummy from './pages/GenresDummy';
import MovieDetails from './pages/MovieDetails';
import Trivia from './pages/Trivia';
import PopularMovies from './pages/PopularMovies';
import { MoviesDummyProvider } from './context/MoviesDummyContext';

function App() {

  return (
    <>
      <MoviesDummyProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
            {/* <Route path="/top-twenty" element={<TopTwentyMoviesList />} /> */}
            <Route path="/trivia" element={<Trivia />} />
            <Route path="/genres" element={<GenresDummy />} />
            {/* <Route path="/genres" element={<Genres />} /> */}
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </MoviesDummyProvider>


    </>
  )
}

export default App
