import React, { useState } from "react";
import ImageList from "./ImageList";
import ImageModel from "./ImageModel";

const ImageGallery = ({ scrollRight, scrollLeft, type }) => {
  const [images] = useState([
    {
      id: 1,
      src: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE5dQ4j?ver=d466",
      alt: "Mountains",
      caption: "Beautiful Mountains",
    },
    {
      id: 2,
      src: "https://canvasstorageprod.blob.core.windows.net/assets/5b/5c/5b5cb304-3391-4765-a51c-e6322e800d84.jpg?n=BestSellingGames-Tile-3840x2160-W11-STORE-01.jpg",
      alt: "Beach",
      caption: "Sunset at the Beach",
    },
    {
      id: 3,
      src: "https://canvasstorageprod.blob.core.windows.net/assets/f7/a0/f7a005d2-05dc-470e-8ff6-37c7170e8f26.jpg?n=Promo%2012.6-12.12_ForzaHorizon5_Launch_Review-04_16x9.jpg",
      alt: "City",
      caption: "City Life at Night",
    },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index?.id - 1);
    setShowModel(true);
  };

  const handleModelClose = () => {
    setShowModel(false);
  };

  const handleNextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="">
      <ImageList
        images={images}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
        scrollLeft={scrollLeft}
        scrollRight={scrollRight}
        onImageClick={handleImageClick}
      />
      {/* {showModel && ( */}
      <ImageModel
        show={type === 'game' ? false : showModel}
        image={images[currentImageIndex]}
        onClose={handleModelClose}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
      {/* )} */}
    </div>
  );
};

export default ImageGallery;
