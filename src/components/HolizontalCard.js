const HolizontalCard = () => {
  return (
    <div className="flex bg-[#454b61] hover:bg-[#2a2e3b] p-2 rounded-xl hover:shadow-lg">
      <div className="flex justify-center items-center p-2">
        <div className=" w-16 h-16 bg-slate-500 rounded"></div>
      </div>
      <div className="flex flex-col flex-grow w-full p-2">
        <span className="line-clamp-1">WhatsApp igujj j</span>
        <span className=" line-clamp-1">Social</span>
        <span>Rating: 4</span>
      </div>
      <div className="text-right">
        <span className="bottom-2 w-fit px-2 mb-4 rounded-md shadow-sm shadow-gray-800">
          Free
        </span>
      </div>
    </div>
  );
};

export default HolizontalCard;
