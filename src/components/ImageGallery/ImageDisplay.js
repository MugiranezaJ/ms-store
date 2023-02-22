import { useState } from 'react';

export function ImageDisplay({ images, captions }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleModalClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {images.map((image, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <img
              src={image}
              alt="Images"
              className="w-full h-full object-contain cursor-pointer"
              onClick={() => handleClick(index)}
            />
            {captions && (
              <div className="text-center mt-2">{captions[index]}</div>
            )}
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray-900">
          <div className="relative">
            <button
              className="absolute top-0 right-0 z-50 px-4 py-2 text-white bg-gray-800 rounded-lg focus:outline-none"
              onClick={handleModalClose}
            >
              Close
            </button>
            <img
              src={images[selectedImageIndex]}
              alt="Imagsse"
              className="w-full h-full object-contain"
            />
            {captions && (
              <div className="absolute bottom-0 left-0 z-50 w-full bg-black bg-opacity-50 p-4 text-white">
                {captions[selectedImageIndex]}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
