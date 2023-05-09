/* eslint-disable @next/next/no-img-element */
import EventsCard from "@/components/EventsCard";
import ServicesCard from "@/components/ServicesCard";
import SnapBox from "@/components/SnapBox";
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black overflow-y-auto overflow-x-hidden scrollbar-hide">
      <NavBar />

      <img
        src="/landingGradient_1.png"
        alt=""
        className="absolute top-0 left-0 bg-transparent h-full w-full lg:-translate-x-[10%] lg:h-auto lg:w-auto"
      />
      <img
        src="/landingGradient_2.png"
        alt=""
        className="absolute top-32 lg:top-0 translate-x-1/2 right-1/2 bg-transparent h-full w-full lg:h-auto lg:w-auto"
      />
      <img
        src="/outlineCircleLanding.png"
        alt=""
        className="absolute top-24 lg:top-0 -right-6 bg-transparent h-[600px] lg:h-[800px]"
      />
      <div className="absolute h-full w-full pt-28 lg:pt-44 px-6 lg:px-24">
        <div>
          <h1 className="text-center text-white text-2xl lg:text-6xl font-bold lg:font-extrabold leading-[1.6]">
            Lorem ipsum dolor sit amet.
          </h1>
          <div className="flex items-center space-x-6 justify-center text-white text-sm lg:text-xl mt-7 lg:mt-16">
            <span>Lorem</span>
            <span>•</span>
            <span>Ipsum</span>
            <span>•</span>
            <span>Lorem</span>
          </div>
          <div className="lg:px-44 text-xs text-white text-center mt-10 lg:mt-16 leading-8 lg:leading-10">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              modi deserunt facere. Quam, accusamus iste placeat sit odio
              voluptatem ea quibusdam nobis non nulla excepturi blanditiis
              libero optio incidunt nihil! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Laborum, cumque?
            </p>
          </div>
          <div className="flex items-center justify-center mt-16">
            <div className="h-16 hover:bg-white/5 border border-white/20 rounded-lg flex items-center px-2 transition-all">
              <div className="h-12 w-12 relative">
                <img
                  src="/calendarIcon.png"
                  className="absolute inset-0"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-slate-800">
                  12
                </div>
              </div>

              <div className="ml-4">
                <h1 className="text-white font-semibold text-sm">
                  Happening now event name
                </h1>
                <span className="text-[10px] text-white">
                  12:00 PM - 1:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
