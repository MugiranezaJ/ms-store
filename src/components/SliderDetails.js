import React from "react";

const SliderDetails = ({ content }) => {
  return (
    <div className="flex flex-col text-left bg-slate-500 space-y-4">
      <span className=" text-2xl font-normal opacity-70">Free</span>
      <div className="flex flex-col">
        <span className=" text-5xl font-bold">{/*content?.caption*/}</span>
        <span className=" text-2xl font-normal opacity-70">Video Editor - Spark Your Creativity</span>
        </div>
      <button className="w-fit text-2xl px-5 pb-1 rounded bg-slate-300 bg-opacity-40">See details</button>
    </div>
  );
};

export default SliderDetails;
