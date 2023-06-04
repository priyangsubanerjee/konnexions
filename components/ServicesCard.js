/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";

function ServicesCard({ data }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative backdrop-blur lg:w-[250px] lg:h-[315px] w-[150px] h-[150px]">
      <img
        src="/servicesRectangle.png"
        alt=""
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
        <img src={data.icon.url} className="h-16 w-16 object-contain" alt="" />
        <h2 className="mt-7 font-semibold text-sm lg:text-lg">{data.name}</h2>
        { isClient && screen.width > 1024 && (
          <p className="text-xs lg:text-sm font-light opacity-70 mt-3 px-3 invisible lg:visible">
            {data.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default ServicesCard;
