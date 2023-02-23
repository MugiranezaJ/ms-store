import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HolizontalCard from "../components/HolizontalCard";
import ImageCarousel from "../components/ImageCarousel";
import VerticalCard from "../components/VerticalCard";

const Home = () => {
  const navigate = useNavigate();
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
            <Link to={"/list"}>
              <span>See all</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
            {
              Array.from({length: 8}).map((_, index)=> (
                <HolizontalCard key={index} navigate={navigate} />
              ))
            }
          </div>
        </div>

        {/* Top Paid Apps */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Top paid apps</span>
            <Link to={"/list"}>
              <span>See all</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {
              Array.from({length: 8}).map((_, index) => (
                <VerticalCard key={index} navigate={navigate} />
              ))
            }
          </div>
        </div>

        {/* Top Paid Games */}
        <div>
          <div className="flex justify-between py-4 mt-8">
            <span className=" text-xl font-semibold">Top paid games</span>
            <Link to={"/list"}>
              <span>See all</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {
              Array.from({length: 8}).map((_, index) => (
                <VerticalCard key={index} navigate={navigate} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
