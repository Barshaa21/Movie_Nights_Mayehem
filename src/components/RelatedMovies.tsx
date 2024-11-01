import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

interface RelatedMoviesListProps {
  movieId: string;
}

export default function RelatedMoviesList({ movieId }: RelatedMoviesListProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
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
      console.error("Error while fetching popular movies:", error);
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
          <p className="text-white px-8 text-4xl py-5 font-bold">
            Similar Movies
          </p>
          <Card movies={movies} />
        </div>
      )}
    </>
  );
}
