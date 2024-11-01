import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMovieNights } from "../features/MovieNightsSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoPlayCircle } from "react-icons/io5";

export default function Card({ movies, showAddIcon = true }: any) {
  const dispatch = useDispatch();

  const addMovie = (movie: any) => {
    toast.success(`${movie.title} added to Movie Nights!`);
    dispatch(setMovieNights(movie));
  };

  return (
    <>
      <ToastContainer className="mt-10" />
      <div className="min-h-screen p-4 flex flex-wrap gap-4 justify-center">
        {movies.length > 0 ? (
          movies.map((movie: any) => (
            <div
              key={movie.id}
              className=" overallDiv max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 h-[45rem] w-[30rem]"
            >
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="w-full h-90 rounded-lg mx-auto object-cover movie-image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{movie.title}</div>
                  <p className="text-gray-700 text-base">
                    {movie.overview
                      ? `${movie.overview.substring(0, 100)}...`
                      : "No description available"}
                  </p>
                </div>
              </Link>
              {showAddIcon && (
                <div
                  className="add hover:bg-blue-900 text-xl font-extrabold"
                  onClick={(e) => {
                    e.stopPropagation();
                    addMovie(movie);
                  }}
                >
                  <i className="fa fa-add font-bold"></i>
                </div>
              )}
              <Link to={`/movie/${movie.id}`}>
                <div className="playIcon">
                  <IoPlayCircle className="h-[9rem] w-[9rem] hover:h-[9.5rem] hover:w-[9.5rem] hover:text-gray-900" />
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-2xl font-bold mt-11">No movies found.</p>
        )}
      </div>
    </>
  );
}
