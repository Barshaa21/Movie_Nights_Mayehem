import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedMoviesList from "./RelatedMovies";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieNights } from "../features/MovieNightsSlice";

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  cast: string;
  genres: [];
}

export default function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>();
  // const apiKey = import.meta.env.VITE_API_KEY;
  const apiKey = "b09801335a6316ac2ec98b2dfec3e9ce";
  const baseUrl = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState<Movie | null>(null);
  // const [movieNights, setMovieNights] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const addMovie = () => {
    navigate("/movie-nights");
    // setMovieNights([...movieNights, newMovie]);
    dispatch(setMovieNights(movie));
  };

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (!movie) {
    return <p className="text-white">Movie details not found.</p>;
  }

  return (
    <>
      <div
        className=" min-h-screen px-11 pt-[7rem] relative mt-[40px]"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        {/* Content */}
        <div className="relative z-10 flex gap-11 justify-center bg-black bg-opacity-50 rounded-lg">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="max-w-md rounded-xl object-cover m-5  h-[35rem] w-[20rem]"
            />
            <button
              onClick={addMovie}
              className="bg-[#333] flex gap-4 justify-center text-white rounded-xl p-5 font-extrabold m-5"
            >
              <FaPlus />
              Add to Movies Night
            </button>
          </div>

          <div className="text-white">
            <h1 className="text-[4rem] font-bold">{movie.title}</h1>
            <p className="text-2xl italic mt-4">{movie.overview}</p>
            <p className="mt-4">Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            <p>Cast: {movie.cast}</p>
          </div>
        </div>
      </div>
      <div>
        <RelatedMoviesList movieId={movieId ?? ""} />
      </div>
    </>
  );
}
