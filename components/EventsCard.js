/* eslint-disable @next/next/no-img-element */
import React from "react";

function EventsCard() {
  return (
    <div className="w-[350px] border border-white/20 rounded-2xl p-5">
      <img src="/eventImage.png" alt="" className="h-[180px] w-full" />
      <h1 className="mt-6 text-lg text-white">An amazing event name</h1>
      <p className="text-white/40 text-xs leading-7 mt-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias
        rem nobis recusandae ad labore, hic incidunt.
      </p>
      <div className="flex items-center justify-between mt-5">
        <button className="px-6 py-2 rounded-full bg-white text-black text-xs">
          Regitser
        </button>
        <span className="text-white text-xs">20th June 2021</span>
      </div>
    </div>
  );
}

export default EventsCard;
