import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import HR from "../HR";

const SystemRequirements = () => {
  return (
    <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-10">
      <p className="p-3">Rating and Reviews</p>
      <HR />
      <div className="p-3 pb-5 space-y-4">
        <div className="space-y-4">
          <div className="flex space-x-3">
            <CheckCircleIcon className="w-5 text-green-400" />
            <p>
              This Product shoul work on your device.Items with a tick meet
              developer's system requirements
            </p>
          </div>
          <ul>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>Available on: PC</span>
            </li>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>OS: Windows 11</span>
            </li>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>Architecture: x64</span>
            </li>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>Keyboard: Not specified</span>
            </li>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>Mouse: Not specified</span>
            </li>
            <li className="flex space-x-3">
              <CheckIcon className="w-4 text-green-400" />
              <span>Camera: Not specified</span>
            </li>
          </ul>
        </div>
        <button className="absolute bottom-5 left-3 text-blue-300 rounded-sm hover:bg-slate-400 px-2">
          Show more
        </button>
      </div>
    </div>
  );
};

export default SystemRequirements;
