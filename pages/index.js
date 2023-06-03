/* eslint-disable @next/next/no-img-element */
import EventsCard from "@/components/EventsCard";
import ServicesCard from "@/components/ServicesCard";
import Head from "next/head";
import axios from "axios";

export async function getServerSideProps() {
  const resp = await axios.get(
    process.env.NODE_ENV == "production"
      ? "https://konnexions.netlify.app/api/landing"
      : "http://localhost:3000/api/landing"
  );

  return {
    props: {
      data: resp.data.data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className="h-screen w-screen fixed inset-0 bg-black overflow-hidden scrollbar-hide">
      <Head><title>Konnexions</title></Head>
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
          src="/landingGradient_4.png"
          alt=""
          className="absolute top-[2200px] lg:top-[1000px] right-0 bg-transparent h-[1700px] w-[1700px] lg:h-[2200px] lg:w-[2200px] lg:translate-x-[10%] translate-x-[5%]"
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
              {data.mainHeading}
            </h1>
            <div className="flex items-center space-x-6 justify-center text-white text-sm lg:text-xl mt-7 lg:mt-16">
              {data.arrayFeat.map((item, index) => {
                return (
                  <>
                    <span>{item}</span>
                    {index !== data.arrayFeat.length - 1 && (
                      <span className="text-white/70">•</span>
                    )}
                  </>
                );
              })}
            </div>
            <div className="lg:px-44 text-xs text-white text-center mt-10 lg:mt-16 leading-8 lg:leading-10">
              <p>{data.description}</p>
            </div>
            <div className="flex items-center justify-center mt-16">
              {/* <div className="h-16 hover:bg-white/5 border border-white/20 rounded-lg flex items-center px-2 transition-all cursor-pointer">
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
              </div> */}
              <div className="flex items-center space-x-4">
                {data.socialMedias.map(item => {
                  return (
                    <a key={item.name} href={item.link} target="_blank" rel="noreferrer">
                      <img
                        src={item.icon.url}
                        alt=""
                        className="h-8 w-8 cursor-pointer"
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="mt-56">
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold lg:font-extrabold leading-[1.6]">
              {data.serviceHeading}
            </h1>
            <p className="text-white/70 text-sm text-center mt-3">
              {data.serviceDescription}
            </p>
            <div className="flex flex-wrap place-content-center place-items-center grid grid-cols-2 gap-4 lg:flex items-center justify-center lg:space-x-7 mt-10">
              {data.services.map((item, i) => {
                return <ServicesCard data={item} key={i} />;
              })}
            </div>
          </div>
          <div className="mt-56">
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold lg:font-extrabold leading-[1.6]">
              {data.eventsHeading}
            </h1>
            <p className="text-white/70 text-sm text-center mt-3">
              {data.eventsDescription}
            </p>
            <div className="flex flex-wrap place-content-center place-items-center gap-6 grid grid-cols-1 lg:flex items-center justify-center lg:space-x-7 mt-10">
              {data.events.map((item, i) => {
                return <EventsCard data={item} key={i} />;
              })}
            </div>
          </div>
          <div className="mt-56">
            <h1 className="text-center text-white text-xl lg:text-3xl font-bold lg:font-extrabold leading-[1.6]">
              {data.newsHeading}
            </h1>
            <p className="text-white/70 text-sm text-center mt-3">
              {data.newsDescription}
            </p>
            <div className="w-full lg:w-[70%] mt-10 h-fit mx-auto bg-[#151515] grid grid-cols-1 lg:grid-cols-2 rounded-lg lg:rounded-2xl">
              <div className="p-5 lg:p-10">
                <h1 className="text-lg lg:text-2xl text-white font-semibold">
                  Signup for the weekly newsletter.
                </h1>
                <p className="text-white/70 text-xs leading-6 mt-3">
                  {data.newsContent}
                </p>
                <div className="items-center mt-7">
                  <input
                    type="text"
                    placeholder="abc@gmail.com"
                    className="outline-none text-white bg-white/10 py-3 px-3 w-full rounded-md"
                  />
                  <button className="text-black bg-white/60 w-full text-center py-3 rounded-md mt-4 text-sm">
                    Submit
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <img src="/mail.png" className="hidden lg:block h-44" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}