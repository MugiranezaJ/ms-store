import React from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const ImageModel = ({ show, onClose, image, onPrev, onNext }) => {
  if (!show) {
    console.log("isShow: " + show);
    return null;
  }

  return (
    <div className="fixed z-50 top-0 left-0 w-full h-full overflow-y-auto bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white rounded-lg w-full md:max-w-3xl">
        <div
          className="absolute top-0 right-0 m-4 cursor-pointer z-30"
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-blue-300" />
        </div>

        <img
          src={image?.src}
          alt={image?.caption}
          className="w-full h-96 object-contain"
        />

        <div className="absolute top-0 bottom-0 flex justify-between items-center w-full px-4">
          <div className="cursor-pointer" onClick={onPrev}>
            <ChevronLeftIcon className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300" />
          </div>

          <div className="cursor-pointer" onClick={onNext}>
            <ChevronRightIcon className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300" />
          </div>
        </div>

        <p className="text-gray-700 text-lg p-4">{image?.caption}</p>
      </div>
    </div>
  );
};

export default ImageModel;