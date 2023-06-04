/* eslint-disable @next/next/no-img-element */

import React from "react";
import axios from "axios";
import ResourcesCard from "@/components/ResourcesCard";
import Head from "next/head";

export async function getServerSideProps() {
  const resp = await axios.get(
    process.env.NODE_ENV == "production"
    ? "https://konnexions.netlify.app/api/resource"
    : "http://localhost:3000/api/resource"
  );

  return {
    props: {
      data: resp.data.data,
    },
  };
}

export default function Resources({ data }) {
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
            {data.heading}
          </h1>
          <p className="lg:px-44 text-xs lg:text-sm mt-5 lg:mt-7 text-white/70 text-center leading-8 lg:leading-10">
            {data.description}
          </p>
          <div className="flex items-center justify-center space-x-8 lg:space-x-16 mt-20">
            <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white/50"></div>
            <span className="text-white text-sm lg:text-xl font-medium">
              Resources
            </span>
            <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:justify-center place-items-center mt-16">
            {data.resource.map((item, index) => {
              return <ResourcesCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}