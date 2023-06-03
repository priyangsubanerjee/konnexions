import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faInstagram, faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  const year = new Date().getFullYear();
  const socials = [
    { name: "Facebook", link: "https://www.facebook.com/kiitkonnexions", icon: faFacebook, hovcolor: "text-blue-500" },
    { name: "Instagram", link: "https://www.instagram.com/kiitkonnexions/", icon: faInstagram, hovcolor: "text-pink-500" },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/kiitkonnexions/", icon: faLinkedinIn, hovcolor: "text-blue-500" },
    { name: "Email", link: "mailto:it.society@kiit.ac.in", icon: faEnvelope, hovcolor: "text-red-500" },
  ]

  return (
    <footer className="bg-transparent backdrop-blur text-white text-sm lg:text-base inset-x-0 z-30">
      <div className="container mx-auto px-6 lg:py-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-row space-x-4">
            {socials.map(social => { return (
              <a key={social.name} href={social.link} target="_blank" rel="noreferrer" className={`hover:${social.hovcolor}`}>
                <FontAwesomeIcon icon={social.icon} className="h-8 w-8 cursor-pointer" />
              </a>
            )})}
          </div>
          <div className="mt-2 md:mt-0">
            <p className="text-center md:text-left">
              © {year} KIIT Konnexions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;