/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

function Contact() {
  const [gmailError, setGmailError] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    );
  
    if (
      contactDetails.name.length == 0 ||
      contactDetails.email.length == 0 ||
      contactDetails.message.length == 0
    ) {
      setFormSubmit(false);
      return;
    } else if (!emailRegex.test(contactDetails.email)) {
      setGmailError("Enter a valid email address");
      setFormSubmit(false);
      return;
    } else setFormSubmit(true);
    setGmailError("");
  }, [contactDetails]);

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formSubmit) return;
    const resp = await axios.post(
      process.env.NODE_ENV == "production"
        ? "https://konnexions.herokuapp.com/api/contact"
        : "http://localhost:3000/api/contact",
      contactDetails
    );

    if (resp.status == 200) {
      setContactDetails({
        name: "",
        email: "",
        message: "",
      });
      setFormSubmit(false);
    } else {
      alert("Something went wrong");
    }
  };

  const openMap = () => {
    const link = 'https://www.google.com/maps/place/KIIT+Student+Activity+Center+-+KSAC/@20.3548831,85.8191383,16.7z/data=!4m6!3m5!1s0x3a19093cc3e1974b:0x85a345e1f4fcce86!8m2!3d20.3566159!4d85.818928!16s%2Fg%2F11bx2gww9n?entry=ttu'
    if (window.innerWidth < 768) {
      window.open(link, '_blank')
    }
  }

  return (
    <>
      <Head><title>Konnexions - Contact</title></Head>
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
                Don&apos;t Be Shy, Let&apos;s Connect!
              </h1>
              <div className="text-white text-center mt-4 text-[.7rem] md:text-[1rem] w-[100vw] px-6 leading-7">
                Reach Out to Us for Any Inquiries, Collaborations, or Just a Friendly Chat.
              </div>
              <div className="relative body-font mx-4 lg:mx-24 mt-6 lg:mt-12">
                <div className="absolute inset-0">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="map"
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2630.269281427254!2d85.82064982337539!3d20.35791870849655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093cc3e1974b%3A0x85a345e1f4fcce86!2sKIIT%20Student%20Activity%20Center%20-%20KSAC!5e0!3m2!1sen!2sin!4v1685780284805!5m2!1sen!2sin"
                    style={{ filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/40 to-slate-950/70 rounded-lg lg:pointer-events-none" onClick={ openMap }></div>
                <div className="flex container mx-auto px-5 py-5 pt-24">
                  <div className="lg:w-1/3 md:w-1/2 bg-transparent backdrop-blur-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative sm:z-10 -z-1 opacity-90 lg:opacity-100 border">
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col justify-center md:flex-row md:gap-8 sm:gap-2 mt-2 w-[100%]">
                        <div className="md:w-[50%] w-[100%]">
                          <div className="text-white mb-1">Name</div>
                          <input
                            value={contactDetails.name}
                            onChange={(e) =>
                              setContactDetails({
                                ...contactDetails,
                                name: e.target.value,
                              })
                            }
                            className="bg-white/[0.12] border border-white/[0.11] h-[50px] md:h-[78px] rounded w-[100%] px-2 outline-none lg:text-white"
                            type="text"
                            placeholder="Joseph"
                          />
                        </div>
                        <div className="md:w-[50%] w-[100%]">
                          <div className="text-white mb-1">Email</div>
                          <input
                            value={contactDetails.email}
                            onChange={(e) =>
                              setContactDetails({
                                ...contactDetails,
                                email: e.target.value,
                              })
                            }
                            className="bg-white/[0.12] border border-white/[0.11] h-[50px] md:h-[78px] rounded w-[100%] px-2 outline-none lg:text-white"
                            type="gmail"
                            placeholder="Joseph@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col justify-center mt-2">
                        <div className="text-white mb-1">Message</div>
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
                          className="bg-white/[0.12] pt-4 border border-white/[0.11] h-[100px] md:h-[150px] rounded w-[100%] px-2 outline-none text-white"
                          placeholder="Enter a message"
                          style={{ resize: "none" }}
                        ></textarea>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-red-700">{gmailError}</div>
                        <button
                          disabled={!formSubmit}
                          className="text-sm py-2 px-8 rounded-md mt-4 cursor-pointer transition duration bg-zinc-600/50 text-white hover:bg-indigo-600/50"
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
      </div>
    </>
  );
};

export default Contact;