import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewMovies from './pages/NewMovies';
import TopTwentyMoviesList from './pages/TopTwentyMoviesList';
import Genres from './pages/Genres';
import ComingSoon from './pages/ComingSoon';
import MovieDetails from './pages/MovieDetails';
import Trivia from './pages/Trivia';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-movies" element={<NewMovies />} />
          <Route path="/top-twenty" element={<TopTwentyMoviesList />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
