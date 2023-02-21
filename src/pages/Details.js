import React from "react";
import HR from "../components/HR";
import RatingCard from "../components/RatingCard";
import StarRating from "../components/StarRating";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  FlagIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const Details = () => {
  return (
    <div className="flex justify-between h-full pr-2 space-x-3">
      <div className="w-80 h-full  rounded-lg bg-slate-500 bg-opacity-40">
        #1
      </div>
      <div className="flex-1 space-y-3">
        {/* Description */}
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-40">
          <p className="p-3">Description</p>
          <HR />
          <div className="p-3">
            WhatsApp from Meta is a 100% free messaging app. It’s used by over
            2B people in more than 180 countries. It’s simple, reliable, and
            private, so you can easily keep in touch with your friends and
            family. WhatsApp works across mobile and desktop even on slow
            connections, with no subscription fees*. Private messaging across
            the world Your personal messages and calls to friends and family are
            end-to-end encrypted. No one outside of your chats, not even
            WhatsApp, can read or listen to them. *Data charges may apply.
            Contact your provider for details.
            --------------------------------------------------------- If you
            have any feedback or questions, please go to WhatsApp {">"} Settings
            {">"}
            Help {">"} Contact Us
          </div>
          <button className="absolute bottom-3 left-3 text-blue-300 rounded-sm">
            See More
          </button>
        </div>

        {/* Ratings and Reviews */}
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-40">
          <p className="p-3">Rating and Reviews</p>
          <HR />
          <div className="p-3 pb-5 space-y-4">
            <RatingCard />
            <div>
              <span>User</span>
              <div className="flex items-center space-x-2">
                <StarRating />
                <div className="flex space-x-2">
                  <TrophyIcon className="h-5 w-5 text-blue-500"/>
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
                    <HandThumbUpIcon class="h-5 w-5" />
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
      </div>
    </div>
  );
};

export default Details;
