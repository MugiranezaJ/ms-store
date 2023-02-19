const VerticalCard = () => {
    return (
        <div className="flex flex-col bg-[#454b61] hover:bg-[#2a2e3b] bg-opacity-40 min-h-[300px] justify-between px-3 rounded-xl hover:shadow-2xl">
            <div className=" row-span-2 flex justify-center items-center p-2 pt-5 mt-5">
                <div className=" w-24 h-24 border border-slate-600 bg-slate-700 rounded"></div>
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-sm line-clamp-2">Typing Master 11</span>
                <span className=" text-xs text-neutral-300 line-clamp-1">Education</span>
            </div>
            <div className="bottom-2 w-fit px-2 mb-4 rounded-md shadow-sm shadow-gray-800">
                Paid
            </div>
        </div>
    );
}

export default VerticalCard;