import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const TeamCard = ({ member }) => {
  const checkIcon = (name) => {
    switch (name) {
      case "Linkedin":
        return <FaLinkedinIn size={18} color="fff" />;
      case "Github":
        return <FaGithub size={18} color="fff" />;
      case "Instagram":
        return <FaInstagram size={18} color="fff" />;

      default:
        break;
    }
  };

  return (
    <div className="relative w-[250px] h-[290px] flex flex-col justify-center items-center rounded md:m-12 m-6 md:mb-12 mb-16 ">
      {/* Left Border */}
      <div className="absolute left-2 h-[385px] w-[1.25px] bg-gradient-to-b from-[transparent] via-[#ffffffb5] to-[transparent]" />
      {/* Top Border */}
      <div className="absolute -top-3 h-[1.25px] w-[300px] bg-gradient-to-r from-[transparent] via-[#ffffffb5] to-[transparent]" />
      {/* Right Border */}
      <div className="absolute right-2 h-[385px] w-[1.25px] bg-gradient-to-b from-[transparent] via-[#ffffffb5] to-[transparent] " />

      <Image src={member.image} alt="" className="rounded object-contain" />
      <h3 className="text-2xl text-white font-medium text-center my-4">
        {member.name}
      </h3>
      <div className="flex flex-row">
        <div className="h-[1.6px] w-14 my-auto bg-gradient-to-r from-[#ffffffb5] to-[transparent]" />

        <div className="bg-card_bg px-4 p-1 text-xs rounded mx-1">
          <span className="text-white font-medium">{member.type}</span>
        </div>
        <div className="h-[1.6px] w-16 my-auto bg-gradient-to-r from-[transparent] to-[#ffffffb5]" />
      </div>
      <div className="flex flex-row justify-center items-center mt-4">
        {member.socials.map((social, i) => (
          <a key={i} href={social.link} className="p-2">
            {checkIcon(social.name)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
