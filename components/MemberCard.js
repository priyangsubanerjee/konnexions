/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons'

const MemberCard = ({ data }) => {
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
            src={data.image.url}
            alt=""
            className="object-cover w-[95%] mx-auto mt-1 h-auto absolute inset-0  rounded"
          />
        </div>
        <h3 className="text-lg text-white font-semibold text-center my-4 px-4">
          {data.name}
        </h3>
        <div className="flex flex-row justify-between w-full">
          <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[#ffffff67] to-[transparent]" />

          <div className="bg-card_bg px-2 py-2 text-xs rounded mx-1">
            <p className="text-white font-medium text-center w-full leading-6">
              {data.domain}
            </p>
          </div>

          <div className="h-[1.6px] w-12 my-auto bg-gradient-to-r from-[transparent] to-[#ffffff67]" />
        </div>
        <div className="flex flex-row justify-center items-center mt-4">
          {data.techLink && (
            <a href={data.techLink} className="p-2">
              <FaGithub size={18} color="fff" />
            </a>
          )}
          {data.email && (
            <a href={`mailto:${data.email}`} className="p-2">
              <FaEnvelope size={18} color="fff" />
            </a>
          )}
          {data.other && (
            <a href={data.other} className="p-2">
              <FontAwesomeIcon icon={faLink} size={18} style={{ color: "#fff" }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
