import React from "react";

function Introduction() {
  return (
    <div className="intro">
      <h1 className="text-white text-4xl font-extrabold">Lorem ipsum dolor</h1>
      <div className="text-slate-200 flex items-center space-x-4 text-lg mt-5">
        <span>Connect</span>
        <span>Learn</span>
        <span>Innovate</span>
      </div>
      <div>
        <p className="text-slate-300 mt-5 leading-7 text-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting.
        </p>
      </div>
      <div>
        <button className="bg-indigo-800 text-white py-3 px-4 rounded mt-5">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
}

export default Introduction;
