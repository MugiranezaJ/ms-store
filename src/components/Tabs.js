import React, { useState } from "react";
import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid";

const Tabs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const options = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
    { id: 3, label: "Option 3" },
    { id: 4, label: "Option 4" },
    { id: 5, label: "Option 5" },
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
    <div className="flex justify-center">
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={toggleDropdown}
        >
          {selectedItems.length > 0 ? (
            <span className="pr-2">{selectedItems.length} selected</span>
          ) : (
            <span className="pr-2">Select options</span>
          )}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option.id}
                className="flex items-center justify-between px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 cursor-pointer"
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
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Tabs;
