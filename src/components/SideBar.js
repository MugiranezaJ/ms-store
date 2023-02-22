import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const currenPage = location.pathname;
  console.log("currentPage:", currenPage, currenPage === "/");
  return (
    <div className="fixed hidden sm:flex flex-col justify-between left-0 h-[calc(100%-50px)] w-20 bg-[#1e2024] py-5 px-2">
      <div>
        <ul className=" space-y-5">
          <Link to={"/"}>
            <li
              className={`${
                currenPage === "/" ? "bg-slate-600 " : ""
              }flex flex-col justify-center items-center h-20 hover:bg-slate-700 p-1 rounded`}
            >
              <svg
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className=" text-xs text-white">Home</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="">
        <ul className=" space-y-2">
          <Link to={"/library"}>
            <li
              className={`${
                currenPage === "/library" ? "bg-slate-600 " : ""
              } flex flex-col justify-center items-center hover:bg-slate-700 p-1 rounded`}
            >
              <svg
                height={"20px"}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"
                    class="ci-primary"
                  ></path>{" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"
                    class="ci-primary"
                  ></path>{" "}
                  <path
                    fill="var(--ci-primary-color, #fff)"
                    d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"
                    class="ci-primary"
                  ></path>{" "}
                </g>
              </svg>
              <span className=" text-xs text-white">Libray</span>
            </li>
          </Link>
          <li className="flex flex-col justify-center items-center hover:bg-slate-700 p-1 rounded">
            <svg
              height={"20px"}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 17H12.01M12 14C12.8906 12.0938 15 12.2344 15 10C15 8.5 14 7 12 7C10.4521 7 9.50325 7.89844 9.15332 9M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
