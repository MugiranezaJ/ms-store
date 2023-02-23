import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import ImageItem from "./ImageItem";

function ImageList({ images, onImageClick, onPrev, onNext, scrollRight, scrollLeft }) {
  return (
    <div className="flex justify-centerk w-full">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} onImageClick={onImageClick} />
      ))}

      {/* <div className="absolute top-0 bottom-0 flex justify-between items-center w-full px-4"> */}
        <div className="absolute left-1 top-2/4 cursor-pointer rounded-md hover:bg-slate-600 hover:bg-opacity-90" onClick={scrollRight}>
          <ChevronLeftIcon className="h-8 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
        </div>

        <div className="absolute right-1 top-2/4 cursor-pointer rounded-md hover:bg-slate-600 hover:bg-opacity-90" onClick={scrollLeft}>
          <ChevronRightIcon className="h-8 w-5 text-white hover:text-gray-300 transition-colors duration-300" />
        </div>
      {/* </div> */}
    </div>
  );
}

export default ImageList;
