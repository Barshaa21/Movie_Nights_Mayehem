import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function MoviesNights() {
  const movieNightsData = useSelector((state: any) => state.movieNights.value);

  useEffect(() => {}, [movieNightsData]);

  return (
    <>
      {movieNightsData.length === 0 ? (
        <p className=" my-[5rem] text-4xl">No movies to show.</p>
      ) : (
        <div className="my-[5rem]">
          <p className="text-4xl ml-9 font-bold">Movie Nights</p>
          <Card movies={movieNightsData} showAddIcon={false} />
        </div>
      )}
    </>
  );
}
