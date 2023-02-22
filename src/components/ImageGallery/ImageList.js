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
        <div className="absolute left-0 top-2/4 cursor-pointer hover:bg-slate-600" onClick={scrollRight}>
          <ChevronLeftIcon className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300" />
        </div>

        <div className="absolute right-0 top-2/4 cursor-pointer hover:bg-slate-600" onClick={scrollLeft}>
          <ChevronRightIcon className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300" />
        </div>
      {/* </div> */}
    </div>
  );
}

export default ImageList;
