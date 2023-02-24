import React from "react";
import HR from "../HR";

const Description = () => {
  return (
    <div className="relative min-h-fit pb-8 rounded-lg bg-slate-500 bg-opacity-10">
      <p className="p-3">Description</p>
      <HR />
      <div className="p-3">
        WhatsApp from Meta is a 100% free messaging app. It’s used by over 2B
        people in more than 180 countries. It’s simple, reliable, and private,
        so you can easily keep in touch with your friends and family. WhatsApp
        works across mobile and desktop even on slow connections, with no
        subscription fees*. Private messaging across the world Your personal
        messages and calls to friends and family are end-to-end encrypted. No
        one outside of your chats, not even WhatsApp, can read or listen to
        them. *Data charges may apply. Contact your provider for details.
        --------------------------------------------------------- If you have
        any feedback or questions, please go to WhatsApp {">"} Settings
        {">"}
        Help {">"} Contact Us
      </div>
      <button className="absolute bottom-3 left-3 text-blue-300 rounded-sm">
        See More
      </button>
    </div>
  );
};

export default Description;
