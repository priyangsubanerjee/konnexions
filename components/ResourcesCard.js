/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaLink } from "react-icons/fa";

export default function ResourcesCard({ resource }) {
  return (
    <div className="relative w-[170px] h-[220px] lg:w-[250px] lg:h-[315px] backdrop-blur">
      <img
        src="/servicesRectangle.png"
        alt=""
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
        <img src={resource.image.url} className="h-16 w-16 object-contain" alt="" />
        <h2 className="mt-7 font-semibold text-sm lg:text-lg">{resource.name}</h2>
        <p className="text-xs lg:text-sm font-light opacity-70 mt-3 px-3">
          {resource.description}
        </p>
        <div className="flex flex-row justify-between items-center mt-4">
          <div className="bg-card_bg px-4 p-1 text-xs rounded mx-1">
            <span className="text-white font-medium">{resource.category}</span>
          </div>
          <a href={resource.href} className="p-2">
            <FaLink size={18} color="fff" />
          </a>
        </div>
      </div>
    </div>
  );
}
