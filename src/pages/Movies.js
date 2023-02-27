import React from "react";
import { useNavigate } from "react-router-dom";
import VerticalCard from "../components/AppVerticalCard";

const Movies = () => {
  const navigate = useNavigate();
  return (
    <div className="px-8">
      {/* Top Paid Games */}
      <div>
        <div className="flex justify-between py-4 mt-8">
          <span className=" text-xl font-semibold">TV Shows</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <VerticalCard key={index} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Top Paid Games */}
      <div>
        <div className="flex justify-between py-4 mt-8">
          <span className=" text-xl font-semibold">Movies</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <VerticalCard key={index} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
