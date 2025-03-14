import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
// import Home from "./components/Home";

// import Loader from "./Loader";
import MovieDetail from "./components/MovieDetail";
import Navbar from "./components/Navbar";
import MoviesNights from "./components/MovieNights";
import MoviesList from "./components/MoviesList";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie-nights" element={<MoviesNights />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
