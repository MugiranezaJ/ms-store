import React from "react";
import HR from "../components/HR";
import RatingCard from "../components/RatingCard";
import StarRating from "../components/StarRating";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  FlagIcon,
  TrophyIcon,
  CheckIcon,
  ArrowDownTrayIcon,
  CubeIcon,
  RectangleGroupIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  TagIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import VerticalCard from "../components/VerticalCard";
import StarIcon from "../components/StarIcon";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between h-fit pr-2">
      {/* Side panel */}
      <div className="fixed flex w-[380px] min-h-[calc(100vh-60px)] p-3 rounded-lg bg-slate-500 bg-opacity-40">
        <div className="flex flex-col items-center w-full text-center space-y-16">
          <div>
            <div className="flex justify-center items-center p-2 pt-5 mt-5">
              <div className=" w-[136px] h-[136px] border border-slate-600 bg-slate-700 rounded"></div>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl font-bold line-clamp-2">WhatsApp</span>
              <span className=" text-sm text-neutral-300 line-clamp-1">
                WhatsApp Inc.
              </span>
            </div>
          </div>
          <button className=" w-44 py-1 mb-4 rounded-md text-black bg-blue-400 shadow-sm shadow-grawy-800">
            Get
          </button>
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
          </div>
          <div className="space-y-10 w-5/6 text-sm">
            <p className="line-clamp-3">
              WhatsApp from Meta is a 100% free messaging app. It's used by over
              2B people in more than 180 countries. It's simple, reliable, and
              private,...
            </p>
            <button className="bottom-2 w-fit px-5 py-1 text-sm mb-4 rounded-xl shadow-sm shadow-gray-800">
              Social
            </button>
          </div>
        </div>
        <div className="absolute w-[calc(100%-24px)] flex justify-between bottom-5 box-border">
          <div className="flex">
            <img
              className=" w-12 max-w-xl"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/IARC_3%2B.svg/1680px-IARC_3%2B.svg.png"
              alt="description"
            />
            <div className="flex flex-col justify-end pl-2">
              <span className="font-bold">3+</span>
              <span className="text-gray-300 text-xs">Users interact</span>
            </div>
          </div>
          <div className="flex items-end">
            <button className="text-blue-300 rounded-sm hover:bg-slate-400 p-2">
              <ArrowTopRightOnSquareIcon className="w-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Main body */}
      <div className="h-fit ml-[390px] space-y-3">
        {/* Description */}
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-40">
          <p className="p-3">Screenshots</p>
          <HR />
          <div className="p-3">Some images here!</div>
        </div>
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

        {/* System requirements */}
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-40">
          <p className="p-3">Rating and Reviews</p>
          <HR />
          <div className="p-3 pb-5 space-y-4">
            <div className="space-y-4">
              <div className="flex space-x-3">
                <CheckCircleIcon className="w-5 text-green-400" />
                <p>
                  This Product shoul work on your device.Items with a tick meet
                  developer's system requirements
                </p>
              </div>
              <ul>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>Available on: PC</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>OS: Windows 11</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>Architecture: x64</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>Keyboard: Not specified</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>Mouse: Not specified</span>
                </li>
                <li className="flex space-x-3">
                  <CheckIcon className="w-4 text-green-400" />
                  <span>Camera: Not specified</span>
                </li>
              </ul>
            </div>
            <button className="absolute bottom-5 left-3 text-blue-300 rounded-sm hover:bg-slate-400 px-2">
              Show more
            </button>
          </div>
        </div>

        {/* Additional infomation */}
        <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-40">
          <p className="p-3">Additional infomation</p>
          <HR />
          <div className="p-3 pb-5 space-y-4">
            <div className="grid grid-cols-5 gap-10">
              <div className="flex">
                <div className="w-fit px-2">
                  <CubeIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Published by</p>
                  <p className="text-blue-300">WhatsApp Inc.</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <CalendarDaysIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Release date</p>
                  <p className="">01/01/2023</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <TagIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Category</p>
                  <p className="text-blue-300">Social</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <RectangleGroupIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Approximate size</p>
                  <p className="">102.3</p>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <ArrowDownTrayIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Installation</p>
                  <p className="">
                    Get this app while signed in to your Microsoft account and
                    install on up to ten Windows devices.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <ShieldCheckIcon className="w-4" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-slate-300">This app can</p>
                    <p className="">Use your location</p>
                    <p className="">Use your webcam</p>
                    <p className="">Use your mic</p>
                  </div>
                  <button className="w-fit text-blue-300">Show more</button>
                  <button className="w-fit text-blue-300">
                    Permission info
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <ChatBubbleLeftRightIcon className="w-4" />
                </div>
                <div className="flex flex-col">
                  <div>
                    <p className="text-slate-300">Supported languages</p>
                    <p className="">Africaans</p>
                    <p className="">Albanian</p>
                    <p className="">Arabic</p>
                  </div>
                  <button className="w-fit text-blue-300">Show more</button>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <CubeIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Publisher info</p>
                  <button className="w-fit text-blue-300">
                    Contact information
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <DocumentTextIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Additional terms</p>
                  <button className="w-fit text-blue-300">
                    WhatsApp privacy policy
                  </button>
                  <button className="w-fit text-blue-300">
                    Terms of trancaction
                  </button>
                </div>
              </div>
              <div className="flex">
                <div className="w-fit px-2">
                  <FlagIcon className="w-4" />
                </div>
                <div className="flex flex-col space-y-3">
                  <p className="text-slate-300">Report this product</p>
                  <button className="w-fit text-blue-300">
                    Report this app to Microsoft
                  </button>
                </div>
              </div>
            </div>
            <button className="absolute bottom-5 left-3 text-blue-300 rounded-sm hover:bg-slate-400 px-2">
              Show more
            </button>
          </div>
        </div>

        {/* Peaple also view */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Peaple also view</span>
            <a href="/#">
              <span>See all</span>
            </a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
            <VerticalCard navigate={navigate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
