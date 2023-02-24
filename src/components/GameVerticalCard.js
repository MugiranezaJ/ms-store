import React from 'react';

const GameVerticalCard = ({ navigate }) => {
  return (
    // TODO: add translation on hover and fix content shaky issue on hover
    <div
      role={"button"}
      onClick={() => navigate("details")}
      className="flex flex-col transition duration-75 bg-slate-500 bg-opacity-20 hover:bg-slate-600 hover:bg-opacity-10 min-h-[300px] justify-between px-3 rounded-xl hover:shadow-lg"
    >
      <div className="flex flex-col justify-center items-center text-left mt-5">
        <div className=" w-full h-40 border border-slate-600 bg-slate-700 rounded"></div>
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
};

export default GameVerticalCard;
