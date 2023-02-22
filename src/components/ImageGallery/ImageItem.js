import React from 'react';

const ImageItem = ({ image, onImageClick }) => {
  return (
    <div className="flex-shrink-0 max-w-lg px-4 mb-5">
      <img
        src={image.src}
        alt={image.caption}
        onClick={() => onImageClick(image)}
        className="cursor-pointer hover:opacity-75 transition-opacity duration-300 rounded-lg"
      />
      {/* <p className="text-sm text-gray-500 mt-2">{image.caption}</p> */}
    </div>
  );
};

export default ImageItem;
