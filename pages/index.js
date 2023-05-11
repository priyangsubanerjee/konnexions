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
    <div className="h-screen w-screen fixed inset-0 bg-black overflow-hidden scrollbar-hide">
      <NavBar />
      <div className="h-full w-full relative overflow-y-auto overflow-x-hidden mb-44 pb-44 scrollbar-hide">
        <img
          src="/landingGradient_1.png"
          alt=""
          className="absolute top-0 left-0 bg-transparent h-full w-full lg:-translate-x-[10%] lg:h-[1000px] lg:w-[1000px]"
        />
        <img
          src="/landingGradient_2.png"
          alt=""
          className="absolute top-0 lg:top-0 right-0 bg-transparent h-full w-full lg:h-[1000px] lg:w-[1000px] lg:translate-x-[20%] translate-x-[10%]"
        />
        <img
          src="/landingGradient_3.png"
          alt=""
          className="absolute top-[400px] lg:top-[200px] left-0 bg-transparent h-[1700px] w-[1700px] lg:h-[2200px] lg:w-[2200px] lg:-translate-x-[10%] -translate-x-[5%]"
        />
        <img
          src="/calendar.png"
          alt=""
          className="absolute object-contain top-[1000px] lg:top-[900px] left-0 bg-transparent h-[300px] w-[300px] lg:h-[500px] lg:w-[500px] lg:-translate-x-[30%] -translate-x-[30%]"
        />
        <img
          src="/outlineCircleLanding.png"
          alt=""
          className="absolute top-24 lg:top-0 -right-6 bg-transparent h-[600px] lg:h-[800px]"
        />
        <div className="absolute z-10 h-fit w-full pt-32 pb-28 lg:pt-44 px-6 lg:px-24">
          <div>
            <h1 className="text-center text-white text-3xl lg:text-6xl font-bold lg:font-extrabold leading-[1.6]">
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores modi deserunt facere. Quam, accusamus iste placeat sit
                odio voluptatem ea quibusdam nobis non nulla excepturi
                blanditiis libero optio incidunt nihil! Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Laborum, cumque?
              </p>
            </div>
            <div className="flex items-center justify-center mt-16">
              <div className="h-16 hover:bg-white/5 border border-white/20 rounded-lg flex items-center px-2 transition-all cursor-pointer">
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
                <div className="ml-4 mr-4">
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
          <div className="mt-56">
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold lg:font-extrabold leading-[1.6]">
              Services
            </h1>
            <p className="text-white/70 text-sm text-center mt-3">
              Lorem ipsum dolor sit amet
            </p>
            <div className="place-content-center place-items-center grid grid-cols-2 lg:flex items-center justify-center lg:space-x-7 mt-10">
              <ServicesCard />
              <ServicesCard />
              <ServicesCard />
            </div>
          </div>
          <div className="mt-56">
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold lg:font-extrabold leading-[1.6]">
              Events
            </h1>
            <p className="text-white/70 text-sm text-center mt-3">
              Lorem ipsum dolor sit amet
            </p>
            <div className="place-content-center place-items-center gap-6 grid grid-cols-1 lg:flex items-center justify-center lg:space-x-7 mt-10">
              <EventsCard />
              <EventsCard />
              <EventsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
