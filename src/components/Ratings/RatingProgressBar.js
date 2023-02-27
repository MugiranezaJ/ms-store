import React from "react";
import StarIcon from "./StarIcon";

const RatingProgressBar = ({ percentage, rateIndex }) => {
  return (
    <div className="flex items-center max-w-lg">
      <span className="mx-1">{rateIndex}</span>
      <StarIcon />
      <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div
          className="h-2 bg-orange-500 rounded"
          style={{ width: percentage + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default RatingProgressBar;
