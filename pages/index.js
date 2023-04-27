/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black overflow-hidden">
      <NavBar />
      <div className="relative h-screen w-screen overflow-y-auto overflow-x-hidden">
        <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute z-0 rounded-full bg-gradient-to-br from-[#0057FF]/60 lg:from-[#0057FF] to-transparent -translate-x-1/2 -translate-y-1/2 blur-xl lg:blur-3xl opacity-70"></div>
        <img
          src="/circleHome1.png"
          className="absolute right-0 top-28 h-[700px]"
          alt=""
        />
        <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute right-0 z-0 rounded-full bg-gradient-to-br from-[#0057FF]/60 lg:from-[#0057FF] to-transparent translate-x-[70%] blur-xl lg:blur-3xl opacity-40"></div>
        <div className="absolute inset-0 z-20">
          <div className="min-h-screen flex flex-col justify-center">
            <h1 className="text-center text-white text-[54px] font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex justify-center space-x-8 text-white mt-12 font-light">
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
            </div>
            <p className="text-center text-white leading-[2.9] px-[300px] mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
              vero nemo aspernatur neque nam quam consectetur tempora, quas
              nobis impedit quisquam repudiandae molestiae? Quam ducimus
              similique expedita aperiam delectus.
            </p>
          </div>
          <div className="min-h-screen flex flex-col justify-center">
            <h1 className="text-center text-white text-[54px] font-bold">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex justify-center space-x-8 text-white mt-12 font-light">
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
            </div>
            <p className="text-center text-white leading-[2.9] px-[300px] mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
              vero nemo aspernatur neque nam quam consectetur tempora, quas
              nobis impedit quisquam repudiandae molestiae? Quam ducimus
              similique expedita aperiam delectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
