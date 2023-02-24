import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import VerticalCard from "../components/VerticalCard";
import StarIcon from "../components/StarIcon";
import RatingsAndReviews from "../components/Details/RatingsAndReviews";
import SystemRequirements from "../components/Details/SystemRequirements";
import AdditionalRequirements from "../components/Details/AdditionalRequirements";
import Description from "../components/Details/Description";
import Gallery from "../components/Details/Gallery";

const Details = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between h-fit pr-2">
      {/* Side panel */}
      <div className="relative lg:fixed flex ml-3 lg:ml-0 my-3 lg:my-0 lg:w-[380px] lg:min-h-[calc(100vh-60px)] pb-20 md:p-3  rounded-lg bg-slate-500 bg-opacity-10">
        <div className="flex flex-col md:flex-row lg:flex-col items-center w-full text-center md:text-left lg:text-center lg:space-y-16">
          <div className="md:flex lg:block">
            <div className="flex justify-center items-center p-2 pt-5 lg:mt-5">
              <div className=" w-[136px] h-[136px] border border-slate-600 bg-slate-700 rounded"></div>
            </div>
            <div className="flex flex-col pt-5 lg:pt-0">
              <span className="text-3xl font-bold line-clamp-2">WhatsApp</span>
              <span className=" text-sm text-neutral-300 line-clamp-1">
                WhatsApp Inc.
              </span>
            </div>
          </div>
          <button className="md:absolute lg:relative right-3 top-3 w-44 py-1 mb-4 rounded-md text-black bg-blue-400 shadow-sm shadow-grawy-800">
            Get
          </button>

          <div className="flex flex-col space-x-2 items-center md:items-start lg:items-center space-y-3 lg:space-y-16">
            {/* Ratings */}
            <div className="flex divide-x divide-gray-500">
              <div className="flex flex-col w-24 items-center">
                <div className="flex items-center space-x-1">
                  <p className="text-lg font-semibold">4.1</p>
                  <StarIcon />
                </div>
                <span className="text-xs text-gray-300">Average</span>
              </div>
              <div className="flex flex-col w-24 items-center border-l-2d">
                <div className="flex items-center space-x-1">
                  <p className="text-lg font-semibold">23</p>
                </div>
                <span className="text-xs text-gray-300">Rating</span>
              </div>
              <div className="absolute bottom-5 left-3 md:static lg:absolute flex justify-between lg:bottom-5 lg:left-3 box-border">
                <div className="flex items-end">
                  <img
                    className="h-12 lg:w-12 max-w-xl"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/IARC_3%2B.svg/1680px-IARC_3%2B.svg.png"
                    alt="description"
                  />
                  <div className="flex flex-col justify-end pl-2 text-left">
                    <span className="font-bold">3+</span>
                    <span className="text-gray-300 text-xs">
                      Users interact
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-10 w-5/6 text-xs lg:text-sm">
              <p className="line-clamp-2 lg:line-clamp-3">
                WhatsApp from Meta is a 100% free messaging app. It's used by
                over 2B people in more than 180 countries. It's simple,
                reliable, and private,...
              </p>
              <button className="bottom-2 w-fit px-5 py-1 text-sm mb-4 rounded-xl shadow-sm shadow-gray-800">
                Social
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-3 bottom-5">
          <button className="text-blue-300 rounded-sm hover:bg-slate-400 p-2">
            <ArrowTopRightOnSquareIcon className="w-5" />
          </button>
        </div>
      </div>
      {/* Main body */}
      <div className="h-fit ml-3 lg:ml-[390px] space-y-3">
        {/* Gallery */}
        <Gallery />
        {/* Description */}
        <Description />

        {/* Ratings and Reviews */}
        <RatingsAndReviews />

        {/* System requirements */}
        <SystemRequirements />

        {/* Additional infomation */}
        <AdditionalRequirements />

        {/* Peaple also view */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Peaple also view</span>
            <Link to={"/list"}>
              <span className="pr-3 text-blue-300">See all</span>
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
            {
              Array.from({length: 8}).map((_, index) => (
                <VerticalCard _navigate={navigate} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
