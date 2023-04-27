import React from "react";
import image1 from "/public/image1.png";
import TeamCard from "@/components/TeamCard";
import Polygon_1 from "/public/Polygon_1.svg";
import Polygon_2 from "/public/Polygon_2.svg";
import Image from "next/image";
import Ellipse_Team from "/public/Ellipse_Team.svg";
import NavBar from "@/components/navbar";

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
    <div className="relative flex flex-col h-screen overflow-auto bg-[black] scrollbar-hide">
      <NavBar />
      <div className="flex flex-col justify-center relative items-center">
        <div className="h-[1000px] w-[1000px] absolute z-10 -left-5 -top-10 rounded-full bg-gradient-to-br from-[#1E9688]/70 lg:from-[#1E9688] to-transparent -translate-x-1/2 -translate-y-1/2 blur-[100px]" />
        <div className="h-[700px] w-[700px] absolute z-10 left-[100%] right-0 top-[10%] lg:top-[25%] rounded-full bg-gradient-to-br from-[#515151]/70 lg:from-[#515151]/40 to-transparent -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <Image
          src={Polygon_1}
          alt="Polygon_1"
          className=" hidden lg:block absolute left-[83%] top-[20%] z-100"
        />

        <Image
          src={Polygon_2}
          alt="Polygon_1"
          className="hidden lg:block absolute left-[86%] top-[20.8%] z-100"
        />

        <h3 className="text-2xl md:text-5xl text-white text-center font-extrabold mt-48">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-sm md:text-base mt-5 text-center text-slate-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quibusdam.
        </p>
        <div className="flex flex-row mt-44 mb-20">
          <div className="h-[1.2px]  md:w-80 w-52 my-auto bg-gradient-to-r from-[transparent] to-[#ffff]" />
          <h3 className="md:text-3xl text-xl text-center text-white font-medium  md:ml-16 ml-6  md:mr-16 mr-6">
            Leads
          </h3>
          <div className="h-[1.2px] md:w-80 w-52 my-auto bg-gradient-to-r from-[#ffff] to-[transparent]" />
        </div>
        <div>
          <TeamCard member={member} />
        </div>

        <div className="flex flex-row mt-32	mb-20">
          <div className="h-[1.2px]  md:w-80 w-52 my-auto bg-gradient-to-r from-[transparent] to-[#ffffffb5]" />
          <h3 className="md:text-3xl text-xl text-center text-white font-medium  md:ml-16 ml-6  md:mr-16 mr-6">
            Coordinators
          </h3>
          <div className="h-[1.2px] md:w-80 w-52 my-auto bg-gradient-to-r from-[#ffffffb5] to-[transparent]" />
        </div>
        <div className="flex flex-row flex-wrap w-4/5 justify-center">
          {dummyDatas.map((data, i) => (
            <TeamCard key={i} member={data} />
          ))}
        </div>

        <Image
          src={Ellipse_Team}
          alt="Ellipse_Team"
          className="hidden lg:block absolute -left-12 top-[55%]"
        />
        <div className="flex flex-row mt-32 mb-20">
          <div className="h-[1.2px]  md:w-80 w-52 my-auto bg-gradient-to-r from-[transparent] to-[#ffffffb5]" />
          <h3 className="md:text-3xl text-xl text-center text-white font-medium  md:ml-16 ml-6 md:mr-16 mr-6">
            Team members
          </h3>
          <div className="h-[1.2px] md:w-80 w-52 my-auto bg-gradient-to-r from-[#ffffffb5] to-[transparent]" />
        </div>
        <div className="mb-60 flex flex-row flex-wrap w-4/5 justify-center">
          {dummyDatas.map((data, i) => (
            <TeamCard key={i} member={data} />
          ))}
        </div>
        <div className="h-[1000px] w-[1000px] absolute z-10 left-[100%] top-[100%] rounded-full bg-gradient-to-br from-[#140D5B]/70 lg:from-[#140D5B] to-transparent -translate-x-1/2 -translate-y-1/2 blur-[250px]" />
      </div>
    </div>
  );
};

export default teams;
