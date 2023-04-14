/* eslint-disable @next/next/no-img-element */
import React from "react";

function Team({ className }) {
  return (
    <div className={`${className} team pb-44`}>
      <div>
        <h1 className="text-white text-xl lg:text-2xl text-center font-extrabold">
          Lorem ipsum dolor
        </h1>
        <p className="text-center text-slate-200 mt-1">
          Lorem ipsum dolor sit amet.
        </p>
        <div className="mt-16 flex justify-center">
          <div className="h-[290px] w-[250px] relative">
            <img
              src="/teamMemberBorder.png"
              className="absolute h-full w-full inset-0"
              alt=""
            />
            <div className="absolute h-full w-full">
              <div className="p-2">
                <img
                  src="/demoTeam.png"
                  className="rounded-tr-xl rounded-tl-lg"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-bold text-white text-center">
                  Joseph
                </h2>
              </div>
              <div className="flex items-center w-full mt-3 px-[1px]">
                <div className="h-[1px] bg-gradient-to-r from-white/40 to-transparent w-full"></div>
                <div className="shrink-0 text-white bg-white/10 px-4 py-2 rounded-lg text-sm">
                  Devops Lead
                </div>
                <div className="h-[1px] bg-gradient-to-r to-white/40 from-transparent w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
