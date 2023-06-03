/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import MemberCard from "@/components/MemberCard";
import Head from "next/head";

const Teams = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) return;
      const resp = await axios.get(
        process.env.NODE_ENV == "production"
          ? "https://konnexions.netlify.app/api/member"
          : "http://localhost:3000/api/member"
      );
      setData(resp.data.data);
    }
    fetchData();
  }, [data]);

  if (!data) return null;

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
            {data.heading}
          </h1>
          <p className="lg:px-44 text-xs lg:text-sm mt-5 lg:mt-7 text-white/70 text-center leading-8 lg:leading-10">
            {data.description}
          </p>

          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">Faculty-in-Charge</span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="flex flex-wrap grid grid-cols-3 gap-5 lg:justify-center lg:space-x-5 place-items-center mt-16">
              {data.others.map((member, i) => {
                if (member.team == "Faculty-in-Charge") {
                  return <MemberCard member={member} key={i} />;
                }
              })}
            </div>
          </div>

          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">Coordinators</span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="flex flex-wrap grid grid-cols-3 gap-5 lg:justify-center lg:space-x-5 place-items-center mt-16">
              {data.others.map((member, i) => {
                if (member.team.includes("Coordinator")) {
                  return <MemberCard member={member} key={i} />;
                }
              })}
            </div>
          </div>

          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">Leads</span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="flex flex-wrap grid grid-cols-3 gap-5 lg:justify-center lg:space-x-5 place-items-center mt-16">
              {data.leads.map((member, i) => {
                return <MemberCard member={member} key={i} />;
              })}
            </div>
          </div>

          <div className="mt-36">
            <div className="flex items-center justify-center space-x-8 lg:space-x-16">
              <div className="w-56 h-[1px] bg-gradient-to-r from-transparent to-white"></div>
              <span className="text-white text-xl font-medium">Our Gems</span>
              <div className="w-56 h-[1px] bg-gradient-to-l from-transparent to-white"></div>
            </div>
            <div className="flex flex-wrap grid grid-cols-5 gap-5 lg:justify-center lg:space-x-5 place-items-center mt-16">
              {data.member.map((member, i) => {
                return <MemberCard member={member} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default teams;
