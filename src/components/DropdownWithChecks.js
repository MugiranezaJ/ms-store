import React, { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import HR from "./HR";

const DropdownWithChecks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const options = [
    { id: 1, label: "Sort by date" },
    { id: 2, label: "Sort by name" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedItems.includes(option.id)) {
      setSelectedItems(selectedItems.filter((item) => item !== option.id));
    } else {
      setSelectedItems([...selectedItems, option.id]);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-slate-500 bg-opacity-20 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          <span className="pr-2">Sort & filter</span>
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute md:right-0 mt-2 px-1 w-max rounded-md shadow-lg bg-gray-600 backdrop-blur-3xl bg-opacity-60 ring-1 ring-black ring-opacity-5 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between px-4 py-2 rounded-md text-sm leading-5 bg-opacity-10 hover:bg-slate-500 cursor-pointer"
                role="menuitem"
                onClick={() => handleOptionClick(option)}
              >
                <div className="flex items-center">
                  <input
                    id={`option-${option.id}`}
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    checked={selectedItems.includes(option.id)}
                    readOnly
                  />
                  <label htmlFor={`option-${option.id}`} className="ml-2">
                    {option.label}
                  </label>
                </div>
                {selectedItems.includes(option.id) && (
                  <CheckIcon
                    className="h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
            <HR />
            <div className="flex items-center px-4">
              <input
                id={"option-7"}
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                // checked={selectedItems.includes(option.id)}
                readOnly
              />
              <label htmlFor={`option-7`} className="ml-2">
                Show installed apps only
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownWithChecks;
