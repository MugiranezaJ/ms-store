import React from "react";
import HolizontalCard from "../components/HolizontalCard";
import ImageCarousel from "../components/ImageCarousel";
import VerticalCard from "../components/VerticalCard";

const Home = () => {
  return (
    <div>
      {/* Image Carousel */}
      <div>
        <ImageCarousel />
      </div>
      <div className="px-8">
        {/* To Free Apps */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Top free apps</span>
            <a href="/#">
              <span>See all</span>
            </a>
          </div>
          <div className="grid grid-cols-4 gap-x-4 gap-y-4">
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
            <HolizontalCard />
          </div>
        </div>

        {/* Top Paid Apps */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Top paid apps</span>
            <a href="/#">
              <span>See all</span>
            </a>
          </div>
          <div className="grid grid-cols-8 gap-x-4">
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>

        {/* Top Paid Games */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Top paid games</span>
            <a href="/#">
              <span>See all</span>
            </a>
          </div>
          <div className="grid grid-cols-8 gap-x-4">
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
