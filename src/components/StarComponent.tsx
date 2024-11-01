import { useState, useEffect } from "react";

export default function StarComponent({ vote_average }: any) {
  const [selectedStars, setSelectedStars] = useState(0);
  const totalStars = 5;

  useEffect(() => {
    setSelectedStars(vote_average);
  }, [vote_average]);

  // Function to render stars based on selectedStars
  const renderStars = () => {
    return [...Array(totalStars)].map((_, i) =>
      i < selectedStars && i + 1 > selectedStars ? (
        <i key={i} className="fa fa-star-half-o" />
      ) : i < selectedStars ? (
        <i key={i} className="fa fa-star" />
      ) : (
        <i key={i} className="fa fa-star-o" />
      )
    );
  };

  return (
    <div className="star-rating text-yellow-400 text-2xl">{renderStars()}</div>
  );
}
