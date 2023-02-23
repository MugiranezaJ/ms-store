import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const LibrayItem = () => {
  return (
    <div className="relative flex flex-col pb-10 md:pb-0 md:flex-row md:justify-between md:items-center mb-3 transition duration-75 bg-slate-500 bg-opacity-20 hover:bg-slate-600 hover:bg-opacity-10 p-2 rounded-md hover:shadow-lg">
      <div className="flex">
        <div className="flex justify-center items-center p-2">
          <div className=" w-16 h-16 bg-slate-500 rounded"></div>
        </div>
        <div className="flex flex-col text-left p-2">
          <span className="line-clamp-1">WhatsApp</span>
          <span className=" line-clamp-1">Social</span>
        </div>
      </div>
      <div className="hidden md:block">
        <p>Apps</p>
      </div>
      <div className="absolute bottom-1 md:static">
        <p>Modified yesterday</p>
      </div>
      <div className="flex space-x-3">
        <button className="w-full md:w-fit px-10 h-fit py-1 rounded-md bg-slate-400 bg-opacity-30 hover:bg-opacity-10 hover:bg-slate-500 shadow-sm shadow-grawy-800">
          Open
        </button>
        <div className="absolute top-1 right-1 md:static md:pr-1">
          <EllipsisHorizontalIcon role={"button"} className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default LibrayItem;
