import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RelatedMoviesList from "./RelatedMovies";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setMovieNights } from "../features/MovieNightsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import StarComponent from "./starComponent";

interface Movie {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genres: [];
  origin_country: string;
  status: string;
}

interface Genre {
  id: number;
  name: string;
}

export default function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>();
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = "https://api.themoviedb.org/3";
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

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

  const addMovie = (movie: any) => {
    toast.success(`${movie.title} added to Movie Nights!`);
    dispatch(setMovieNights(movie));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center align-middle">
        <Loader />
      </div>
    );
  }

  if (!movie) {
    return <p className="text-white">Movie details not found.</p>;
  }

  return (
    <>
      <ToastContainer className="mt-11" />
      <div
        className=" min-h-screen px-11 pt-[5rem] relative mt-[40px]"
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
              onClick={() => addMovie(movie)}
              className="bg-[#333] hover:bg-[#6b6b6b] w-[20rem] flex gap-4 justify-center text-white text-xl rounded-xl p-5 font-extrabold m-5"
            >
              <FaPlus className="mt-1" />
              Add to Movies Night
            </button>
          </div>

          <div className="text-white">
            <h1 className="text-[4rem] font-bold">{movie.title}</h1>
            <h2 className="text-2xl text-gray-400">{movie?.tagline}</h2>
            <div className="flex gap-[7rem] my-10 text-gray-400">
              <StarComponent vote_average={movie?.vote_average} />(
              {movie.vote_average} from {movie?.vote_count} Users)
              <p className="text-2xl">{movie.release_date}</p>
            </div>
            <h1 className="text-2xl italic text-gray-200">{movie.overview}</h1>
            <div className="text-2xl">
              <div className="mt-10">
                <span className="title-movieDetails">Genre:</span>
                {movie.genres && movie.genres.length > 0
                  ? movie.genres.map((genre: Genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < movie.genres.length - 1 && ", "}{" "}
                      </span>
                    ))
                  : "No genres available"}
              </div>
              <p>
                <span className="title-movieDetails">Country:</span>
                {movie?.origin_country}
              </p>
              <p>
                <span className="title-movieDetails">Status:</span>
                {movie?.status}
              </p>
            </div>
          </div>
        </div>
        <div>
          <RelatedMoviesList movieId={movieId ?? ""} />
        </div>
      </div>
    </>
  );
}
