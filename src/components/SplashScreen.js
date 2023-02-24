import React from "react";
import { ImSpinner8 } from "react-icons/im";
function SplashScreen() {
  return (
    <div className="fixed top-0 left-0 z-20 w-screen h-screen flex items-center justify-center bg-[#1e1e1e] xbg-opacity-90">
      <div className="flex flex-col justify-center items-center text-center text-white">
        <img
          src="https://static.wikia.nocookie.net/logopedia/images/d/df/Microsoft_Store_2021_Light.svg"
          className="h-20"
          alt="Microsoft Store Icon"
        />
        <ImSpinner8 size={25} className="absolute bottom-1/4 animate-spin" />
      </div>
    </div>
  );
}

export default SplashScreen;
