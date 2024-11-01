import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Card from "./Card";

export default function MoviesList() {
  const apiKey = import.meta.env.VITE_API_KEY;
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
      <div className=" flex flex-col items-center justify-center mb-4 w-full pt-[10rem]">
        <p className="text-[20px] pb-10">
          Find your Favorite TV Shows, Movies...
        </p>
        <div className="w-[60%]">
          <input
            className="p-3 rounded-md border border-gray-300 text-black h-[43px] w-[90%] placeholder:text-[15px] placeholder:text-gray-400"
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
            className="ml-2 bg-black hover:bg-gray-700 h-[40px] text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>
      </div>

      <h1 className="text-4xl pl-11 font-bold mt-10">
        {query ? `Search Results for "${query}"` : "Popular Movies"}
      </h1>

      {loading ? <Loader></Loader> : <Card movies={movies} />}
    </>
  );
}
