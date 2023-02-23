import React, { useState } from "react";
import DropdownWithChecks from "../components/DropdownWithChecks";
import LibrayItem from "../components/LibrayItem";

const tabs = [
  {
    id: 1,
    label: "Apps",
    status: 0,
    message: "",
    content: <LibrayItem />,
  },
  {
    id: 2,
    label: "Games",
    status: 1,
    message: "You don't have games installed yet.",
    content: "",
  },
  {
    id: 3,
    label: "Films & TV",
    status: 1,
    message: "When you get something from the Microsoft Storer ifll show up here.",
    content: "",
  },
  {
    id: 4,
    label: "Included with device",
    status: 1,
    message: "Your device didn't come with additional content.",
    content: "",
  },
];

const Library = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <div className="p-2 md:p-10 space-y-10">
      {/* Library Head info */}
      <div className="flex flex-col space-y-6">
        <h3 className=" text-[28px] font-semibold">Library</h3>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col">
            <p>Updates & Downloads</p>
            <p>Check for Additional updates by clicking "Get updates"</p>
          </div>
          <button className="w-fit px-4 py-1 mb-4 rounded-md text-black bg-blue-400 shadow-sm shadow-grawy-800">
            Get updates
          </button>
        </div>
      </div>

      {/* Library items */}
      <div>
        <div className="flex flex-col space-y-3 lg:space-y-0 lg:scroll-py-0 lg:items-center lg:flex-row md:justify-between">
          <div>
            <ul className="flex space-x-3">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  className={`${
                    activeTab === tab.id
                      ? "px-4 border-blue-400 text-blue-400"
                      : " border-gray-500 "
                  } border-2 px-3 lg:px-10 py-1 rounded-md sm:rounded-3xl cursor-pointer`}
                  onClick={() => handleClick(tab.id)}
                >
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="inset-0">
            <DropdownWithChecks />
          </div>
        </div>
        {/* Tab contents */}
        <div>
          <div className="mt-4">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? "flex flex-col justify-center min-h-[300px] text-center" : "hidden"}`}
              >
                {tab.status === 0
                  ? Array.from({ length: 24 }).map((_, index) => tab.content)
                  : tab.message}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
