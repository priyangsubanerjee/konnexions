/* eslint-disable @next/next/no-img-element */
import React from "react";

function EventsCard({ data }) {
  // const currentDate = new Date();
  // const eventDate = new Date(data.date);
  // const isFutureEvent = eventDate > currentDate;

  const handleRegisterClick = () => {
    if (isFutureEvent) {
      window.open(data.regLink, '_blank');
    }
  };

  return (
    <div className="w-[350px] border border-white/20 rounded-2xl p-5">
      <img src={data.image.url} alt="" className="h-[180px] w-full" />
      <h1 className="mt-6 text-lg text-white">{data.name}</h1>
      <p className="text-white/40 text-xs leading-7 mt-1">
        {data.description}
      </p>
      <div className="flex items-center justify-between mt-5">
        {data.state == 'register' && (
          <button
          className="px-6 py-2 rounded-full bg-white text-black text-xs"
          onClick={handleRegisterClick}>
            Register
          </button>
        )}
        <span className="text-white text-xs">{data.date}</span>
      </div>
    </div>
  );
}

export default EventsCard;
