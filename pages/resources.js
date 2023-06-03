/* eslint-disable @next/next/no-img-element */
import ResourcesCard from "@/components/ResourcesCard";
import React from "react";
import Head from "next/head";

export default function Resources() {
  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <Head><title>Konnexions - Resources</title></Head>
      <div className="h-full w-full relative overflow-y-auto overflow-x-hidden mb-44 pb-44 scrollbar-hide">
        <img
          src="/projectsGradient_1.png"
          alt=""
          className="absolute top-0 left-0 bg-transparent h-full w-full lg:-translate-x-[10%] lg:h-[1000px] lg:w-[1000px]"
        />
        <img
          src="/trophy.png"
          alt=""
          className="absolute top-20 left-0 object-contain bg-transparent h-[300px] w-[300px] lg:h-[700px] lg:w-[700px] -translate-x-[20%]"
        />
        <div className="absolute z-10 h-fit w-full pt-32 pb-28 lg:pt-44 px-6 lg:px-24">
          <h1 className="text-center text-white text-2xl lg:text-5xl font-bold lg:font-extrabold leading-[1.6]">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="lg:px-44 text-xs lg:text-sm mt-5 lg:mt-7 text-white/70 text-center leading-8 lg:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
            vero nemo aspernatur
          </p>
          <div className="flex items-center justify-center space-x-8 lg:space-x-16 mt-20">
            <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white/50"></div>
            <span className="text-white text-sm lg:text-xl font-medium">
              Resources
            </span>
            <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mt-16 lg:w-[700px] lg:mx-auto">
            <ResourcesCard />
            <ResourcesCard />
            <ResourcesCard />
          </div>
        </div>
      </div>
    </div>
  );
}