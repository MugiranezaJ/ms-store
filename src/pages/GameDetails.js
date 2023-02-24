import React from "react";
import AdditionalRequirements from "../components/Details/AdditionalRequirements";
import Description from "../components/Details/Description";
import Gallery from "../components/Details/Gallery";
import RatingsAndReviews from "../components/Details/RatingsAndReviews";
import SystemRequirements from "../components/Details/SystemRequirements";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import StarIcon from "../components/StarIcon";
import { Link, useNavigate } from "react-router-dom";
import GameVerticalCard from "../components/GameVerticalCard";

const GameDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full">
      <div
        className="absolute top-0 left-0 w-full bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://canvasstorageprod.blob.core.windows.net/assets/f7/a0/f7a005d2-05dc-470e-8ff6-37c7170e8f26.jpg?n=Promo%2012.6-12.12_ForzaHorizon5_Launch_Review-04_16x9.jpg")',
        }}
      >
        <div className="overflow-y-auto h-screen md:pt-96 scrollbar-thin scrollbar-thumb-slate-900 scrollbar-thumb-rounded-full">
          <div className="min-h-96 pt-72 -mb-1 sm:px-5 md:px-10 lg:px-20 xl:px-40 bg-gradient-to-t to-transparent from-[#393e4d] xvia-slate-500">
            {/* Top panel */}
            <div className="relative flex rounded-lg bg-opacity-40 z-10">
              <div className="flex flex-col sm:items-center md:items-start md:flex-row w- space-x-3 py-3">
                {/* Game Main Image */}
                <div className="flex h-full pl-3 sm:pl-0">
                  <div className=" w-[170px] h-full min-h-[200px] border border-slate-600 bg-slate-700 rounded"></div>
                </div>

                {/* Game Overview description */}
                <div className="flex flex-col sm:items-center md:items-start space-y-5">
                  <div className="flex flex-col space-y-3">
                    <span className="text-3xl font-bold line-clamp-2">
                      Asphalt 9: Legends
                    </span>
                    <span className="text-xs space-x-1">
                      2018 • Gameloft SE
                    </span>
                  </div>
                  {/* Ratings */}
                  <div className="flex divide-x divide-gray-500">
                    <div className="flex flex-col w-fit px-2 xw-24 justify-evenly items-center">
                      <div className="flex items-center space-x-1">
                        <p className="text-lg font-semibold">4.1</p>
                        <StarIcon />
                      </div>
                      <span className="text-xs text-gray-300">Average</span>
                    </div>
                    <div className="flex flex-col px-2 xw-24 justify-evenly items-center">
                      <div className="flex items-center space-x-1">
                        <p className="text-lg font-semibold">23</p>
                      </div>
                      <span className="text-xs text-gray-300">Rating</span>
                    </div>
                    <div className="flex justify-between box-border pl-2">
                      <div className="flex items-end">
                        <img
                          className="w-14 max-w-xl"
                          src="https://upload.wikimedia.org/wikipedia/commons/5/51/IARC_7%2B.svg"
                          alt="description"
                        />
                        <div className="flex flex-col justify-end pl-2 text-left">
                          <span className="font-bold">7+</span>
                          <span className="text-gray-300 text-[10px] w-36 line-clamp-3">
                            Implied Violence, Mild Violence In-Game Purchases
                            (Irwludes Items), Users Interact
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="space-y-10 w-5/6 text-xs lg:text-sm">
                    <p className="line-clamp-2 lg:line-clamp-2">
                      Race in spectacular real-life locations with prestigious
                      cars (Ferrari, Porsche, McLaren, etc.) to collect, upgrade
                      and customize. Experience action-packed gameplay that
                      rewards skillful play and risk- taking in single- or
                      multiplayer. Game updates are coming up with new cars,
                      locations and features.
                    </p>
                  </div>
                  <div className=" self-start">
                    <button className="w-44 px-4 py-3 rounded-md text-left font-semibold text-black bg-blue-400 shadow-sm shadow-grawy-800">
                      Get
                    </button>
                    <p>Offers in-app purchases</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-3 bottom-5">
                <button className="text-blue-300 rounded-sm hover:bg-slate-400 p-2">
                  <ArrowTopRightOnSquareIcon className="w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Joiner div, hhhhhhhh */}
          <div className="bg-[#393e4d] bg-opacity-90 backdrop-blur-2xl w-full h-4"></div>
          <div className="relative px-5 md:px-10 lg:px-20 xl:px-40 pt-10 pb-24 bg-slate-700 bg-opacity-80 backdrop-blur-3xl space-y-3">
            <Gallery />
            <Description />
            <RatingsAndReviews />
            <SystemRequirements />
            <AdditionalRequirements />

            <div>
              <div className="flex justify-between py-4 mt-8">
                <span className=" text-xl font-semibold">Peaple also view</span>
                <Link to={"/list"}>
                  <span className="pr-3 text-blue-300">See all</span>
                </Link>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <GameVerticalCard _navigate={navigate} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
