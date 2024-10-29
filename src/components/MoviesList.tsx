import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MoviesList() {
  const apiKey = "b09801335a6316ac2ec98b2dfec3e9ce";
  const baseUrl = "https://api.themoviedb.org/3";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/movie/popular?api_key=${apiKey}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!query) {
      fetchPopularMovies();
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className=" flex flex-col items-center justify-center mb-4 w-full pt-11">
        <p className="text-white text-[20px] pb-10">
          Find your Favorite TV Shows, Movies...
        </p>
        <div className="w-[60%]">
          <input
            className="p-3 rounded-md text-black h-[40px] w-[90%] placeholder:text-[15px] placeholder:text-gray-400"
            type="text"
            placeholder="Search for movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 hover:bg-blue-700 h-[40px] text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </div>

      <h1 className="text-white text-[30px] pl-4">
        {query ? `Search Results for "${query}"` : "Popular Movies"}
      </h1>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="min-h-screen p-4 flex flex-wrap gap-4 justify-center">
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
                    <div className="font-bold text-xl mb-2">{movie.title}</div>
                    <p className="text-gray-700 text-base">
                      {movie.overview
                        ? `${movie.overview.substring(0, 100)}...`
                        : "No description available"}
                    </p>
                  </div>
                  {/* <div className="px-6 pt-4 pb-2">
                    <Link to={`/movie/${movie.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </Link>
                  </div> */}
                </div>
              </Link>
            ))
          ) : (
            <p className="text-white">No movies found.</p>
          )}
        </div>
      )}
    </>
  );
}
