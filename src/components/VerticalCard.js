import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const VerticalCard = ({ navigate }) => {
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
        className="flex items-center justify-center h-[300px] w-full bg-gray-300 rounded-xl animate-pulse dark:bg-gray-700 bg-opacity-10"
      ></div>
    );
  } else {
    return (
      // TODO: add translation on hover and fix content shaky issue on hover
      <div
        role={"button"}
        onClick={() => navigate("details")}
        style={{ backfaceVisibility: "hidden" }}
        className="flex flex-col realtive transition duration-75 bg-slate-500 bg-opacity-20 hover:bg-slate-600 hover:bg-opacity-10 min-h-[300px] justify-between px-3 rounded-xl hover:shadow-lg"
      >
        <div className=" row-span-2 flex justify-center items-center pt-5 mt-5">
          <div className=" w-24 h-24 border border-slate-600 bg-slate-700 rounded"></div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm line-clamp-2">Typing Master 11</span>
          <span className=" text-xs text-neutral-300 line-clamp-1">
            Education
          </span>
          <StarRating />
        </div>
        <div className="bottom-2 w-fit px-2 mb-4 rounded-md shadow-sm shadow-gray-800">
          Paid
        </div>
      </div>
    );
  }
};

export default VerticalCard;
