/* eslint-disable @next/next/no-img-element */
import React from "react";

function ServicesCard({ data }) {
  return (
    <div className="relative w-[170px] h-[220px] lg:w-[250px] lg:h-[315px] backdrop-blur">
      <img
        src="/servicesRectangle.png"
        alt=""
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
        <img src={data.icon.url} className="h-16 w-16 object-contain" alt="" />
        <h2 className="mt-7 font-semibold text-sm lg:text-lg">{data.name}</h2>
        <p className="text-xs lg:text-sm font-light opacity-70 mt-3 px-3">
          {data.description}
        </p>
      </div>
    </div>
  );
}

export default ServicesCard;
