/* eslint-disable @next/next/no-img-element */
import NavBar from "@/components/navbar";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black overflow-hidden">
      <NavBar />
      <div className="relative h-screen w-screen overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute z-0 rounded-full bg-gradient-to-br from-[#0057FF]/60 lg:from-[#0057FF] to-transparent -translate-x-1/2 -translate-y-1/2 blur-xl lg:blur-3xl opacity-70"></div>
        <img
          src="/circleHome1.png"
          className="absolute right-0 top-56 h-[600px] opacity-70"
          alt=""
        />
        <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute right-0 top-28 z-0 rounded-full bg-gradient-to-l from-[#0057FF]/60 lg:from-[#0057FF] to-transparent translate-x-[60%] blur-xl lg:blur-3xl opacity-50"></div>
        <div className="h-[600px] lg:h-[1700px] w-[600px] lg:w-[1700px] absolute top-[1000px] left-0 z-0 rounded-full bg-gradient-to-r from-[#B535B0]/30 lg:from-[#B535B0]/40 to-transparent -translate-x-[50%] blur-xl lg:blur-3xl"></div>
        <img
          src="/landingCalendar.png"
          className="absolute left-0 top-[1600px] h-[400px] lg:h-[400px]"
          alt=""
        />
        <div className="absolute inset-0 z-20">
          <div className="min-h-screen flex flex-col justify-center">
            <h1 className="lg:text-center text-white leading-[1.7] text-4xl lg:text-[54px] font-bold px-6">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="flex lg:justify-center space-x-8 text-white mt-12 font-light px-6">
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
              <span>•</span>
              <span>Lorem</span>
            </div>
            <p className="lg:text-center text-sm lg:text-base text-white leading-8 lg:leading-[2.9] px-6 lg:px-[300px] mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ea
              vero nemo aspernatur neque nam quam consectetur tempora, quas
              nobis impedit quisquam repudiandae molestiae? Quam ducimus
              similique expedita aperiam delectus.
            </p>
          </div>
          <div className="min-h-screen flex flex-col justify-center">
            <h1 className="text-center text-white text-3xl lg:text-[44px] font-bold">
              Our services
            </h1>

            <p className="text-center text-white leading-[2.9] lg:px-[300px] mt-4">
              Lorem ipsum dolor sit amet
            </p>

            <div className="grid grid-cols-1 gap-y-5 place-content-center place-items-center lg:flex justify-center w-full mt-16 lg:space-x-8">
              <div className="relative w-[220px] h-[290px]  lg:w-[250px] lg:h-[315px] backdrop-blur">
                <img
                  src="/servicesRectangle.png"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-12 h-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </i>
                  <h2 className="mt-8 font-medium text-lg">App Development</h2>
                  <p className="text-sm font-light opacity-70 mt-3">
                    10+ Projects
                  </p>
                </div>
              </div>
              <div className="relative w-[220px] h-[290px]  lg:w-[250px] lg:h-[315px] backdrop-blur">
                <img
                  src="/servicesRectangle.png"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-12 h-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </i>
                  <h2 className="mt-8 font-medium text-lg">App Development</h2>
                  <p className="text-sm font-light opacity-70 mt-3">
                    10+ Projects
                  </p>
                </div>
              </div>
              <div className="relative w-[220px] h-[290px]  lg:w-[250px] lg:h-[315px] backdrop-blur">
                <img
                  src="/servicesRectangle.png"
                  alt=""
                  className="absolute inset-0 h-full w-full"
                />
                <div className="absolute text-white inset-0 h-full w-full z-10 flex flex-col items-center justify-center">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-12 h-12"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                      />
                    </svg>
                  </i>
                  <h2 className="mt-8 font-medium text-lg">App Development</h2>
                  <p className="text-sm font-light opacity-70 mt-3">
                    10+ Projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen flex flex-col justify-center">
            <h1 className="text-center mt-44 lg:mt-0 text-white text-3xl lg:text-[44px] font-bold">
              Events
            </h1>

            <p className="text-center text-white leading-[2.9] lg:px-[300px] mt-4">
              Lorem ipsum dolor sit amet
            </p>

            <div className="grid grid-cols-1 gap-y-5 place-content-center place-items-center lg:flex justify-center w-full mt-16 lg:space-x-8">
              <div className="w-[350px] border border-white/20 rounded-2xl p-5">
                <img
                  src="/eventImage.png"
                  alt=""
                  className="h-[180px] w-full"
                />
                <h1 className="mt-6 text-lg text-white">
                  An amazing event name
                </h1>
                <p className="text-white/40 text-xs leading-7 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate alias rem nobis recusandae ad labore, hic incidunt.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <button className="px-6 py-2 rounded-full bg-white text-black text-xs">
                    Regitser
                  </button>
                  <span className="text-white text-xs">20th June 2021</span>
                </div>
              </div>
              <div className="w-[350px] border border-white/20 rounded-2xl p-5">
                <img
                  src="/eventImage.png"
                  alt=""
                  className="h-[180px] w-full"
                />
                <h1 className="mt-6 text-lg text-white">
                  An amazing event name
                </h1>
                <p className="text-white/40 text-xs leading-7 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate alias rem nobis recusandae ad labore, hic incidunt.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <button className="px-6 py-2 rounded-full bg-[#404040] text-white text-xs">
                    Upcoming
                  </button>
                  <span className="text-white text-xs">20th June 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
