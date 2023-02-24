import React from "react";
import {
  FlagIcon,
  ArrowDownTrayIcon,
  CubeIcon,
  RectangleGroupIcon,
  CalendarDaysIcon,
  DocumentTextIcon,
  TagIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import HR from "../HR";

const AdditionalRequirements = () => {
  return (
    <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-10">
      <p className="p-3">Additional infomation</p>
      <HR />
      <div className="p-3 pb-5 space-y-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
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
              <button className="w-fit text-blue-300">Permission info</button>
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
  );
};

export default AdditionalRequirements;
