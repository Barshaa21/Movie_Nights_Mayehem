import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface RelatedMoviesListProps {
  movieId: string;
}

export default function RelatedMoviesList({ movieId }: RelatedMoviesListProps) {
  const apiKey = "b09801335a6316ac2ec98b2dfec3e9ce";
  const baseUrl = "https://api.themoviedb.org/3";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/movie/${movieId}/similar?api_key=${apiKey}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="bg-black">
          <p className="text-white py-8 pl-[12rem] text-[3rem] font-bold">
            Similar Movies
          </p>
          <div className="min-h-screen px-11 flex flex-wrap gap-5 justify-center ">
            {movies.length > 0 ? (
              movies.map((movie: any) => (
                <Link to={`/movie/${movie.id}`}>
                  <div
                    key={movie.id}
                    className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"
                  >
                    <img
                      className="w-full h-90 rounded-lg object-cover"
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        {movie.title}
                      </div>
                      <p className="text-gray-700 text-base">
                        {movie.overview
                          ? `${movie.overview.substring(0, 100)}...`
                          : "No description available"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-white">No similar movies found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
