import { FlagIcon, HandThumbDownIcon, HandThumbUpIcon, TrophyIcon } from "@heroicons/react/24/outline";
import HR from "../HR";
import RatingCard from "../RatingCard";
import StarRating from "../StarRating";

const RatingsAndReviews = () => {
    return (
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-10">
          <p className="p-3">Rating and Reviews</p>
          <HR />
          <div className="p-3 pb-5 space-y-4">
            <RatingCard />
            <div>
              <span>User</span>
              <div className="flex items-center space-x-2">
                <StarRating />
                <div className="flex space-x-2">
                  <TrophyIcon className="h-5 w-5 text-blue-500" />
                  <span className="uppercase text-sm font-semibold text-blue-500">
                    Most helpful favolable review
                  </span>
                </div>
              </div>
              <p className="mt-2">Some Description</p>
              <div className="flex items-center justify-between mx-6 space-y-3">
                <span className="text-sm text-gray-300">5 years ago</span>
                <div className="flex space-x-2">
                  <button className="flex items-center rounded-sm bg-opacity-40 hover:bg-slate-400 px-2">
                    <HandThumbUpIcon className="h-5 w-5" />
                    <span>12</span>
                  </button>
                  <button className="flex items-center rounded-sm bg-opacity-40 hover:bg-slate-400 px-2">
                    <HandThumbDownIcon className="h-5 w-5" />
                    <span>3</span>
                  </button>
                  <button className="flex items-center rounded-sm bg-opacity-40 hover:bg-slate-400 px-2">
                    <FlagIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <button className="absolute bottom-5 left-3 text-blue-300 rounded-sm hover:bg-slate-400 px-2">
              See all
            </button>
          </div>
        </div>
    );
}

export default RatingsAndReviews;