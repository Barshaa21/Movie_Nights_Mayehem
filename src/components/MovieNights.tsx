import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function MoviesNights() {
  const movieNightsData = useSelector((state: any) => state.movieNights.value);

  useEffect(() => {}, [movieNightsData]);

  return (
    <>
      {movieNightsData.length === 0 ? (
        <p className=" my-[5rem] text-4xl">No movies to show</p>
      ) : (
        <div className="my-[5rem] p-4">
          <p className="text-5xl">Movie Nights</p>
          <div className="min-h-screen flex flex-wrap gap-4 mt-5 justify-center">
            {movieNightsData.length > 0 ? (
              movieNightsData.map((movie: any) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
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
              <p className="text-white">No movies found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
