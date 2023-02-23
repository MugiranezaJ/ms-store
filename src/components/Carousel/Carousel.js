import React, { useEffect, useState } from "react";
import Swipe from "react-easy-swipe";
import "./styles/index.css";

function Carousel({
  data,
  time,
  width,
  height,
  slideNumberStyle,
  radius,
  slideNumber,
  automatic,
  slideBackgroundColor,
  slideImageFit,
  thumbnails,
  showNavBtn = true,
}) {
  //Initialize States
  const [slide, setSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [change, setChange] = useState(0);

  //Function to change slide
  const addSlide = (n) => {
    if (slide + n >= data.length) setSlide(0);
    else if (slide + n < 0) setSlide(data.length - 1);
    else setSlide(slide + n);
  };

  //Start the automatic change of slide
  useEffect(() => {
    if (automatic) {
      var index = slide;
      const interval = setInterval(
        () => {
          if (!isPaused) {
            setSlide(index);
            index++;
            if (index >= data.length) index = 0;
            if (index < 0) index = data.length - 1;
          }
        },
        time ? time : 2000
      );
      return () => {
        clearInterval(interval);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused, change]);

  function scrollTo(el) {
    const elLeft = el.offsetLeft + el.offsetWidth;
    const elParentLeft = el.parentNode.offsetLeft + el.parentNode.offsetWidth;

    // check if element not in view
    if (elLeft >= elParentLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({ left: elLeft - elParentLeft, behavior: "smooth" });
    } else if (elLeft <= el.parentNode.offsetLeft + el.parentNode.scrollLeft) {
      el.parentNode.scroll({
        left: el.offsetLeft - el.parentNode.offsetLeft,
        behavior: "smooth",
      });
    }
  }

  //Listens to slide state changes
  useEffect(() => {
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");

    var slideIndex = slide;
    var i;
    for (i = 0; i < data.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //If thumbnails are enabled
    if (thumbnails) {
      var thumbnailsArray = document.getElementsByClassName("thumbnail");
      for (i = 0; i < thumbnailsArray.length; i++) {
        thumbnailsArray[i].className = thumbnailsArray[i].className.replace(
          " active-thumbnail",
          ""
        );
      }
      if (thumbnailsArray[slideIndex] !== undefined)
        thumbnailsArray[slideIndex].className += " active-thumbnail";
      scrollTo(document.getElementById(`thumbnail-${slideIndex}`));
    }

    if (slides[slideIndex] !== undefined)
      slides[slideIndex].style.display = "block";
    if (dots[slideIndex] !== undefined) dots[slideIndex].className += " active";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slide, isPaused]);

  return (
    <div className="box">
      <div
        style={{
          maxWidth: width ? width : "600px",
          maxHeight: height ? height : "400px",
        }}
      >
        <Swipe
          onSwipeRight={() => {
            addSlide(-1);
            setChange(!change);
          }}
          onSwipeLeft={() => {
            addSlide(1);
            setChange(!change);
          }}
        >
          <div
            className="carousel-container"
            style={{
              maxWidth: width ? width : "600px",
              height: height ? height : "400px",
              backgroundColor: slideBackgroundColor
                ? slideBackgroundColor
                : "darkgrey",
              borderRadius: radius,
            }}
          >
            {data.map((item, index) => {
              return (
                <div
                  className="carousel-item fade"
                  style={{
                    maxWidth: width ? width : "600px",
                    maxHeight: height ? height : "400px",
                  }}
                  onMouseDown={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onMouseUp={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onMouseLeave={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  onTouchStart={(e) => {
                    automatic && setIsPaused(true);
                  }}
                  onTouchEnd={(e) => {
                    automatic && setIsPaused(false);
                  }}
                  key={index}
                >
                  {slideNumber && (
                    <div className="slide-number" style={slideNumberStyle}>
                      {index + 1} / {data.length}
                    </div>
                  )}
                  <div className="slide-number"><span>Home</span></div>
                  {/* <div
                    style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover'}}
                    className={"carousel-image"}
                  ></div> */}
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="carousel-image"
                    style={{
                      borderRadius: radius,
                      objectFit: slideImageFit ? slideImageFit : "cover",
                    }}
                  />
                  <div className="flex flex-col justify-center absolute bottom-0 h-full text-left pl-8 bg-gradient-to-r from-neutral-900 to-transparent space-y-4">
                    <span className="sm:text-xl md:text-2xl font-normal opacity-70">
                      Free
                    </span>
                    <div className="flex flex-col">
                      <span className="sm:text-2xl md:text-5xl font-bold">
                        {item?.caption}
                      </span>
                      <span className="sm:text-xl md:text-2xl font-normal opacity-70">
                        Video Editor - Spark Your Creativity
                      </span>
                    </div>
                    <button className="w-fit text-2xl px-5 pb-1 rounded bg-slate-300 bg-opacity-40">
                      See details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </Swipe>
      </div>
      {thumbnails && (
        <div className="relative">
          <div
            className="flex 2xl:justify-center items-center -mt-7 md:-mt-20 overflow-scroll bg-gradient-to-t from-[#232226] via-[#232226] to-transparent thumbnails"
            id="thumbnail-div"
            style={{ maxWidth: width }}
          >
            {showNavBtn && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                className="prev"
                onClick={(_e) => {
                  addSlide(-1);
                  setChange(!change);
                }}
              >
                &#10094;
              </a>
            )}
            {showNavBtn && (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                className="next"
                onClick={(_e) => {
                  addSlide(1);
                  setChange(!change);
                }}
              >
                &#10095;
              </a>
            )}
            {data.map((item, index) => {
              return (
                <img
                  src={item.image}
                  alt={item.caption}
                  className=" mx-2 rounded-xl w-44 thumbnail"
                  id={`thumbnail-${index}`}
                  key={index}
                  onClick={(e) => {
                    setSlide(index);
                    setChange(!change);
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { Carousel };
export default Carousel;
