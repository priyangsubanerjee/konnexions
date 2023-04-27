import React from "react";

const Header = () => {
  const head_Data = ["Home", "Team", "Projects & Achievements", "Contact us"];

  return (
    <div
      className="flex flex-row bg-transparent"
      style={{ padding: "2em 3em" }}
    >
      <a className="text-white text-3xl font-bold z-700 relative text-left">Logo!</a>
      <div
        style={{ marginLeft: "auto" }}
        className="flex flex-row justify-between items-center m-5"
      >
        {head_Data.map((item, i) => (
          <a
            key={i}
            href={item.toLowerCase()}
            style={{ margin: "auto 26px" }}
            className="text-base text-white ml-6 mr-6"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
