import { useEffect, useState } from "react";
import StarRating from "./Ratings/StarRating";

const HolizontalCard = ({ navigate }) => {
  const [showSkeleton, setShowSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSkeleton(false);
    }, 1500);
  }, []);
  if (showSkeleton) {
    return (
      <div
        role="status"
        className="flex items-center justify-center h-28 xmax-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
      ></div>
    );
  } else {
    return (
      <div
        role={"button"}
        className="flex transition duration-75 bg-slate-500 bg-opacity-20 hover:-translate-y-[1px] hover:bg-slate-600 hover:bg-opacity-10 p-2 rounded-xl cursor-pointer hover:shadow-lg"
        onClick={() => navigate("/details")}
      >
        <div className="flex justify-center items-center p-2">
          <div className=" w-20 h-20 bg-slate-500 rounded"></div>
        </div>
        <div className="flex flex-col flex-grow w-full p-2">
          <span className="line-clamp-1">WhatsApp igujj j</span>
          <span className=" line-clamp-1">Social</span>
          <StarRating />
        </div>
        <div className="text-right">
          <span className="bottom-2 w-fit px-2 mb-4 rounded-md shadow-sm shadow-gray-800">
            Free
          </span>
        </div>
      </div>
    );
  }
};

export default HolizontalCard;
