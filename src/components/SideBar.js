import { Link, useLocation } from "react-router-dom";
import { FaGamepad } from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
// import {GiClapperboard} from 'react-icons/gi'
import {MdHomeFilled} from 'react-icons/md'

const SideBar = () => {
  const location = useLocation();
  const currenPage = location.pathname;
  return (
    <div className="fixed hidden sm:flex flex-col justify-between left-0 h-[calc(100%-50px)] w-20 xbg-[#1e2024] py-5 px-2">
      <div>
        <ul className=" space-y-1">
        
          <li
            className={`${
              currenPage === "/" ? "bg-slate-400 bg-opacity-20 " : ""
            } hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded`}
          >
            <Link to={"/"} className="flex flex-col justify-center items-center h-20">
              <MdHomeFilled size={30} />
              <span className=" text-xs text-white">Home</span>
            </Link>
          </li>
          <li
            className={`${
              currenPage === "/apps" ? "bg-slate-400 bg-opacity-20 " : ""
            } hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded`}
          >
            <Link to={"/apps"} className="flex flex-col justify-center items-center h-20 text-center">
              <TbApps size={30} />
              <span className=" text-xs text-white">Apps</span>
            </Link>
          </li>
          <li
            className={`${
              currenPage === "/games" ? "bg-slate-400 bg-opacity-20 " : ""
            } hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded`}
          >
            <Link to={"/games"} className="flex flex-col justify-center items-center h-20">
             <FaGamepad size={30} />
              <span className=" text-xs text-white">Games</span>
            </Link>
          </li>
          {/* <li
            className={`${
              currenPage === "/games" ? "bg-slate-400 bg-opacity-20 " : ""
            } hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded`}
          >
            <Link to={"/movies"} className="flex flex-col justify-center items-center h-20 text-center">
              <GiClapperboard size={30} />
              <span className=" text-xs text-white">Movies &TV</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="">
        <ul className=" space-y-2">
          <Link to={"/library"}>
            <li
              className={`${
                currenPage === "/library" ? "bg-slate-400 bg-opacity-20 " : ""
              } flex flex-col justify-center items-center hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded`}
            >
              <svg
                height={"20px"}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
                    className="ci-primary"
                  ></path>{" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"
                    className="ci-primary"
                  ></path>{" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"
                    className="ci-primary"
                  ></path>{" "}
                </g>
              </svg>
              <span className=" text-xs text-white">Libray</span>
            </li>
          </Link>
          <li className="flex flex-col justify-center items-center hover:bg-opacity-10 hover:bg-slate-500 p-1 rounded">
            <svg
              height={"20px"}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 17H12.01M12 14C12.8906 12.0938 15 12.2344 15 10C15 8.5 14 7 12 7C10.4521 7 9.50325 7.89844 9.15332 9M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <span className=" text-xs text-white">Help</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
