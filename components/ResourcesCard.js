/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLink } from "react-icons/fa";

export default function ResourcesCard({ data }) {
  return (
    <div className="relative w-[170px] h-[220px] lg:w-[250px] lg:h-[315px] backdrop-blur">
      <img
        src="/servicesRectangle.png"
        alt=""
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
        <div className="p-2 mt-2 relative w-full overflow-hidden h-[200px] rounded">
          <img
            src={data.image.url}
            alt=""
            className="object-cover w-[70%] mx-auto mt-auto h-auto absolute inset-0  rounded"
          />
        </div>
        <h2 className="mt-5 font-semibold text-sm lg:text-lg mx-1 px-1">{data.name}</h2>
        <p className="text-xs lg:text-sm font-light opacity-70 mt-3 px-3">
          {data.description}
        </p>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="bg-card_bg px-4 p-1 text-xs rounded mx-1">
            <span className="text-white font-medium">{data.category}</span>
          </div>
          <a href={data.href} className="p-2">
            <FaLink size={18} color="fff" />
          </a>
        </div>
      </div>
    </div>
  );
}