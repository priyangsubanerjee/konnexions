/* eslint-disable @next/next/no-img-element */
import React from "react";
import image1 from "/public/image1.png";
import MemberCard from "@/components/MemberCard";
import Head from "next/head";

const teams = () => {
  const member = {
    name: "Jhon Doe",
    image: image1,
    type: "DevOps Lead",
    socials: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/abhishek-kumar-0a6b3b1b2/",
      },

      {
        name: "Github",
        link: "https://www.linkedin.com/in/abhishek-kumar-0a6b3b1b2/",
      },
      {
        name: "Instagram",
        link: "https://www.linkedin.com/in/abhishek-kumar-0a6b3b1b2/",
      },
    ],
  };

  const dummyDatas = new Array(6).fill(member);

  return (    
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-black">
      <Head><title>Konnexions - Team</title></Head>
      <div className="h-full w-full relative overflow-y-auto overflow-x-hidden mb-44 pb-44 scrollbar-hide">
        <img
          src="/teamGradient_1.png"
          alt=""
          className="absolute top-0 left-0 bg-transparent h-full w-full lg:-translate-x-[10%] lg:h-[1000px] lg:w-[1000px]"
        />
        <img
          src="/teamGradient_2.png"
          alt=""
          className="absolute top-44 right-0 bg-transparent h-full w-full lg:translate-x-[10%] lg:h-[1000px] lg:w-[1000px]"
        />
        <img
          src="/teamGradient_4.png"
          alt=""
          className="absolute top-[1500px] right-0 bg-transparent h-full w-full lg:translate-x-[10%] lg:h-[1000px] lg:w-[1000px]"
        />
        <img
          src="/teamPolygon.png"
          alt=""
          className="absolute top-20 right-0 bg-transparent object-contain h-[500px] w-[500px] lg:translate-x-[20%] translate-x-[30%]"
        />
        <div className="absolute z-10 h-fit w-full pt-32 pb-28 lg:pt-44 px-6 lg:px-24">
          <h1 className="text-center text-white text-2xl lg:text-5xl font-bold lg:font-extrabold leading-[1.6]">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="lg:px-44 text-xs lg:text-sm mt-5 lg:mt-7 text-white/70 text-center leading-8 lg:leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
            vero nemo aspernatur
          </p>
          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">Leads</span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:flex lg:justify-center lg:space-x-5 place-items-center mt-16">
              <MemberCard member={member} />
            </div>
          </div>

          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">
                Coordinators
              </span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:flex lg:justify-center lg:space-x-5 place-items-center mt-16">
              <MemberCard member={member} />
              <MemberCard member={member} />
              <MemberCard member={member} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teams;
