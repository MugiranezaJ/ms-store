import React, { useEffect, useState } from "react";

const GameVerticalCard = ({ navigate }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);
  }, []);
  if (showSkeleton) {
    return (
      <div
        role="status"
        className="flex items-center justify-center h-[300px] max-w-sm bg-gray-300 rounded-xl animate-pulse dark:bg-gray-700 bg-opacity-10"
      ></div>
    );
  } else {
    return (
      // TODO: add translation on hover and fix content shaky issue on hover
      <div
        role={"button"}
        onClick={() => navigate("game_details")}
        className="flex flex-col h-96 transition duration-75 bg-slate-500 bg-opacity-20 hover:bg-slate-600 hover:bg-opacity-10 min-h-[300px] justify-between px-3 lg:px-4 rounded-xl hover:shadow-lg"
      >
        <div className="flex flex-col justify-center items-center text-left mt-5">
          <div className=" w-full h-56 border border-slate-600 bg-slate-700 rounded"></div>
          <span className="text-sm line-clamp-2">Forza Horizon 5</span>
          <span className=" text-xs text-neutral-300 line-clamp-1">
            Racing & Flying
          </span>
        </div>
        <div className="bottom-2 w-fit px-2 mb-4 rounded-md shadow-sm shadow-gray-800">
          Paid
        </div>
      </div>
    );
  }
};

export default GameVerticalCard;
