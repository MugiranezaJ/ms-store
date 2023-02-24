import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { history } from "../Util/historyObject";

const SideNav = ({ showUserMenu, toggleOpenUserMenu }) => {
  const [isNothome, setIsNothome] = useState(false);
  const [pathChanged, setPathChanged] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsNothome(location.pathname !== "/");
    setPathChanged(true);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-between sticky z-10 top-0 xbg-[#1e2024] min-h-[50px] pl-8 md:pr-8">
      {/* Website icon and back button for mobile devices */}
      <div className="flex space-x-3">
        {pathChanged && isNothome && (
          <div className="sm:hidden ">
            <button
              onClick={() => history.back()}
              className="p-2 rounded-2xl bg-slate-400 bg-opacity-30"
            >
              <ArrowLeftIcon className="w-5" />
            </button>
          </div>
        )}
        <a href="https://github.com/MugiranezaJ" className="flex items-center">
          <img
            src="https://apps.microsoft.com/store/images/logo-40x40.png"
            className="h-4 mr-3 sm:h-6"
            alt="Microsoft Store Icon"
          />
          <span className="hidden sm:block self-center w-fit text-sm whitespace-nowrap text-ellipsis dark:text-white">
            Microsoft Store
          </span>
        </a>
      </div>

      {/* Search */}
      <div className="flex-auto max-w-xl mx-4 box-border">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative text-white">
            <input
              type="search"
              id="default-search"
              className="block w-full p-2 pr-8 text-ellipsis text-sm  text-gray-900s border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search apps, games, movies, and more"
              required
            />
            <button
              type="submit"
              className="absolute right-1 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-[0.45rem] hover:bg-slate-600"
            >
              <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>

      {/* User account */}
      <div className="flex relative items-center md:order-2">
        <button
          type="button"
          className="flex mr-3 text-sm bg-gray-700 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={toggleOpenUserMenu}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 rounded-full"
            src="https://static.thenounproject.com/png/5100711-200.png"
            alt="user avator"
          />
        </button>
        {/* <!-- Dropdown menu --> */}
        <div
          className={`${
            showUserMenu ? "" : `hidden`
          } absolute z-50 top-7 right-2 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          id="user-dropdown"
        >
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              Bonnie Green
            </span>
            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
              name@flowbite.com
            </span>
          </div>
          <ul className="py-2" aria-labelledby="user-menu-button">
            {/* <li>
              <a
                href="/#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Settings
              </a>
            </li> */}
            <li>
              <Link
                to="library"
                onClick={toggleOpenUserMenu}
                className="block px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Library
              </Link>
            </li>
            <li>
              <a
                href="/#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
        {/* <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default SideNav;
