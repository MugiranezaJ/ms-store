import React from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const ImageModel = ({ show, onClose, image, onPrev, onNext }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed z-50 bottom-0 left-0 w-full h-[calc(100%-50px)] overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center backdrop-blur-xl">
      <div className="relative flex flex-col items-center justify-center bg-white bg-opacity-40 w-full h-full">
        <div
          className="absolute top-14 right-0 m-4 cursor-pointer z-30"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6 text-white hover:text-gray-300" />
        </div>

        <img
          src={image?.src}
          alt={image?.caption}
          className="w-full h-96 object-contain"
        />

        <div className="absolute top-0 bottom-0 flex justify-between items-center w-full px-4">
          <div className="cursor-pointer h-fit py-2 rounded-md bg-slate-600" onClick={onPrev}>
            <ChevronLeftIcon className="h-8 w-8 text-white hover:text-gray-300 transition-colors duration-300" />
          </div>

          <div className="cursor-pointer h-fit py-2 rounded-md bg-slate-600" onClick={onNext}>
            <ChevronRightIcon className="h-8 w-8 text-white hover:text-gray-300 transition-colors duration-300" />
          </div>
        </div>

        <p className="text-lg p-4">{image?.caption}</p>
      </div>
    </div>
  );
};

export default ImageModel;
