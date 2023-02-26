import React, { useState } from "react";
import HR from "../HR";
import ImageGallery from "../ImageGallery";

const Gallery = ({ type }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollLeft = () => {
    const gallery = document.getElementById("gallery");
    if (scrollPosition < gallery.scrollWidth - gallery.offsetWidth) {
      gallery.scrollBy({
        left: gallery.offsetWidth,
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition + gallery.offsetWidth);
    }
  };

  const handleScrollRight = () => {
    const gallery = document.getElementById("gallery");
    if (scrollPosition > 0) {
      gallery.scrollBy({
        left: -gallery.offsetWidth,
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition - gallery.offsetWidth);
    }
  };
  return (
    <div className="relative min-h-fit pb-2 rounded-lg bg-slate-500 bg-opacity-10">
      <p className="p-3">Screenshots</p>
      <HR />
      <div id="gallery" className="p-3 overflow-x-scroll scrollbar-none">
        <ImageGallery
          type={type}
          scrollRight={handleScrollRight}
          scrollLeft={handleScrollLeft}
        />
      </div>
    </div>
  );
};

export default Gallery;
