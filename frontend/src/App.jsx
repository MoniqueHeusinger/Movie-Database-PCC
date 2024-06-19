import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import TopTwentyMoviesList from './pages/TopTwentyMoviesList';
import GenresDummy from './pages/GenresDummy';
import MovieDetails from './pages/MovieDetails';
import Trivia from './pages/Trivia';
import TopTwentyMoviesListDummy from './pages/TopTwentyMoviesListDummy';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-twenty" element={<TopTwentyMoviesListDummy />} />
          {/* <Route path="/top-twenty" element={<TopTwentyMoviesList />} /> */}
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/genres" element={<GenresDummy />} />
          {/* <Route path="/genres" element={<Genres />} /> */}
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
