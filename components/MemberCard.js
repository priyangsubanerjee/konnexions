/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub, FaEnvelope, FaLink } from "react-icons/fa";

const MemberCard = ({ member }) => {
  //   return (
  //     <div className="relative w-[250px] h-[290px] flex flex-col justify-center items-center rounded md:m-12 m-6 md:mb-12 mb-16 ">
  //       {/* Left Border */}
  //       <div className="absolute left-2 h-[385px] w-[1.25px] bg-gradient-to-b from-[transparent] via-[#ffffffb5] to-[transparent]" />
  //       {/* Top Border */}
  //       <div className="absolute -top-3 h-[1.25px] w-[300px] bg-gradient-to-r from-[transparent] via-[#ffffffb5] to-[transparent]" />
  //       {/* Right Border */}
  //       <div className="absolute right-2 h-[385px] w-[1.25px] bg-gradient-to-b from-[transparent] via-[#ffffffb5] to-[transparent] " />

  //       {/* <img src={member.image.url} alt="" className="rounded object-contain" /> */}
  //       {/* Div bounded by the upper borders */}
  //       <img src={member.image.url} alt="" className="rounded object-contain" />
  //       <h3 className="text-2xl text-white font-medium text-center my-4">
  //         {member.name}
  //       </h3>
  //       <div className="flex flex-row justify-between w-full px-2">
  //         <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[#ffffff67] to-[transparent]" />

  //         <div className="bg-card_bg px-4 p-1 text-xs rounded mx-1">
  //           <span className="text-white font-medium">{member.team}</span>
  //         </div>
  //         <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[transparent] to-[#ffffff67]" />
  //       </div>
  //       <div className="flex flex-row justify-center items-center mt-4">
  //         {member.githubLink && (
  //           <a href={member.githubLink} className="p-2">
  //             <FaGithub size={18} color="fff" />
  //           </a>
  //         )}
  //         {member.email && (
  //           <a href={`mailto:${member.email}`} className="p-2">
  //             <FaEnvelope size={18} color="fff" />
  //           </a>
  //         )}
  //         {member.website && (
  //           <a href={member.other} className="p-2">
  //             <FaLink size={18} color="fff" />
  //           </a>
  //         )}
  //       </div>
  //     </div>
  //   );

  return (
    <div className="relative w-[355px] h-[420px]">
      <img
        src="/borderFrame.png"
        className="absolute inset-0 w-full h-full"
        alt=""
      />
      <div className="absolute inset-0 top-16 h-full w-[218px] mx-auto">
        <div className="p-2 relative w-full overflow-hidden h-[200px] rounded">
          <img
            src={member.image.url}
            alt=""
            className="object-cover w-[95%] mx-auto mt-1 h-auto absolute inset-0  rounded"
          />
        </div>
        <h3 className="text-lg text-white font-semibold text-center my-4 px-4">
          {member.name}
        </h3>
        <div className="flex flex-row justify-between w-full">
          <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[#ffffff67] to-[transparent]" />

          <div className="bg-card_bg px-2 py-2 text-xs rounded mx-1">
            <p className="text-white font-medium text-center w-full leading-6">
              {member.team}
            </p>
          </div>

          <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[transparent] to-[#ffffff67]" />
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          {member.githubLink && (
            <a href={member.githubLink} className="p-2">
              <FaGithub size={18} color="fff" />
            </a>
          )}
          {member.email && (
            <a href={`mailto:${member.email}`} className="p-2">
              <FaEnvelope size={18} color="fff" />
            </a>
          )}
          {member.website && (
            <a href={member.other} className="p-2">
              <FaLink size={18} color="fff" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
