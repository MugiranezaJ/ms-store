import React from 'react';
import { useNavigate } from 'react-router-dom';
import GameVerticalCard from '../components/GameVerticalCard';

const Games = () => {
    const navigate = useNavigate();
  return (
    <div className="px-8">
        {/* Best Selling Games */}
      <div>
        <div className="flex justify-between py-4 mt-8">
          <span className=" text-xl font-semibold">Best selling games</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <GameVerticalCard key={index} navigate={navigate} />
          ))}
        </div>
      </div>

      {/* Top Paid Games */}
      <div>
        <div className="flex justify-between py-4 mt-8">
          <span className=" text-xl font-semibold">All games</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {Array.from({ length: 32 }).map((_, index) => (
            <GameVerticalCard key={index} navigate={navigate} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Games;