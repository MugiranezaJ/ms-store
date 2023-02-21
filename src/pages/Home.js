import React from "react";
import { useNavigate } from "react-router-dom";
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
            <a href="/#">
              <span>See all</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-4">
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
            <HolizontalCard navigate = {navigate}/>
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
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
