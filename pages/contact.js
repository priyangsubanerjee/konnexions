/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import NavBar from "@/components/Navbar";
import Head from "next/head";

const Contact = () => {
  const [gmailError, setGmailError] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (
      contactDetails.name.length == 0 ||
      contactDetails.email.length == 0 ||
      contactDetails.message.length == 0
    ) {
      setFormSubmit(false);
      return;
    } else if (!contactDetails.email.includes("@")) {
      setGmailError("Enter a valid email address");
      setFormSubmit(false);
      return;
    } else setFormSubmit(true);
    setGmailError("");
  }, [contactDetails]);
  return (
    <>
      <Head><title>Konnexions - Contact</title></Head>
      <NavBar />
      <div className="fixed inset-0 h-screen w-screen bg-black overflow-x-hidden">
        <div className="relative inset-0 h-screen w-screen overflow-x-hidden">
          <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute z-10 rounded-full bg-gradient-to-br from-[#6C63FF]/60 lg:from-[#6C63FF] to-transparent -translate-x-1/2 -translate-y-1/2 blur-xl lg:blur-3xl"></div>
          <div className="absolute py-32 inset-0 h-screen w-screen z-30 overflow-y-auto overflow-x-hidden scrollbar-hide">
            <img
              src="./images/mail.png"
              alt="mail"
              className="absolute w-[212px] md:w-[412px] top-[-10%] left-0 "
            />
            <div>
              <h1 className="text-white font-bold text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] text-center max-w-[1440px] m-auto">
                Lorem ipsum dolor sit amet.
              </h1>
              <div className="text-white text-center mt-4 text-[.7rem] md:text-[1rem] w-[100vw] px-6 leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis voluptate.
              </div>
              <div className="flex justify-center">
                <div className="w-[90vw] md:w-[700px] lg:w-[800px] 2xl:w-[900px] mt-8 md:mt-12 lg:mt-10">
                  <form action="submit">
                    <div className="flex flex-col justify-center md:flex-row gap-8 mt-8 w-[100%]">
                      <div className="md:w-[50%] w-[100%]">
                        <div className="text-white mb-4">Name</div>
                        <input
                          value={contactDetails.name}
                          onChange={(e) =>
                            setContactDetails({
                              ...contactDetails,
                              name: e.target.value,
                            })
                          }
                          className="bg-white/[0.12] border border-white/[0.11] h-[50px] md:h-[78px] rounded w-[100%] px-6 outline-none text-white"
                          type="text"
                          placeholder="Joseph"
                        />
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <div className="text-white mb-4">Email</div>
                        <input
                          value={contactDetails.email}
                          onChange={(e) =>
                            setContactDetails({
                              ...contactDetails,
                              email: e.target.value,
                            })
                          }
                          className="bg-white/[0.12] border border-white/[0.11] h-[50px] md:h-[78px] rounded w-[100%] px-6 outline-none text-white"
                          type="gmail"
                          placeholder="Joseph@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center mt-8">
                      <div className="text-white mb-4">Message</div>
                      <textarea
                        name="message"
                        type="text"
                        value={contactDetails.message}
                        onChange={(e) =>
                          setContactDetails({
                            ...contactDetails,
                            message: e.target.value,
                          })
                        }
                        className="bg-white/[0.12] pt-6 border border-white/[0.11] h-[150px] md:h-[240px] rounded w-[100%] px-6 outline-none text-white"
                        placeholder="Enter a message"
                      ></textarea>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-red-700">{gmailError}</div>
                      <button
                        disabled={!formSubmit}
                        className="bg-white text-sm text-black py-2 px-8 rounded-md mt-8 cursor-pointer hover:bg-gray-200"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
