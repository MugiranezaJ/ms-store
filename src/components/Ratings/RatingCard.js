import RatingProgressBar from "./RatingProgressBar";

const RatingCard = () => {
  return (
    <div>
      {/* Progress */}
      <div className="flex ">
        <div className="flex flex-col justify-center items-center w-fit">
          <span className="text-8xl font-bold -mt-3">4.1</span>
          <span className="text-sm font-medium text-gray-300 uppercase">
            23 Ratings
          </span>
        </div>
        <div className="flex-1">
          <RatingProgressBar percentage={70} rateIndex={5} />
          <RatingProgressBar percentage={17} rateIndex={4} />
          <RatingProgressBar percentage={8} rateIndex={3} />
          <RatingProgressBar percentage={4} rateIndex={2} />
          <RatingProgressBar percentage={1} rateIndex={1} />
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
