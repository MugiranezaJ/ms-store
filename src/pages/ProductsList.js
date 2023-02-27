import { useNavigate } from "react-router-dom";
import VerticalCard from "../components/AppVerticalCard";

const ProductsList = () => {
  const navigate = useNavigate();
  const items = 32;
  return (
    <div className="px-10">
      <div className="flex justify-between py-4 mt-8">
        <span className=" text-xl font-semibold">Top paid apps</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {Array.from({ length: items }).map((_, index) => (
          <VerticalCard key={index} navigate={navigate} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
