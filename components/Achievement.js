/* eslint-disable @next/next/no-img-element */
import React from "react";

function Achievement() {
  return (
    <div className="flex flex-col justify-start items-center">
      <img src="/achievement.png" alt="" />
      <h1 className="text-white font-medium">Achievement</h1>
      <p className="text-xs text-white/70 text-center leading-6 mt-2">
        Lorem ipsum dolor sit amet consectetur
      </p>

      <p className="text-center text-white mt-2 text-xs">2022</p>
    </div>
  );
}

export default Achievement;
