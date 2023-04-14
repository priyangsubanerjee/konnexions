import React from "react";

function Navbar() {
  return (
    <div className="fixed z-30 top-0 inset-x-0 h-16 lg:h-20 px-6 lg:px-24 flex items-center w-full backdrop-blur">
      <h1 className="text-white text-2xl font-bold">Logo.</h1>
      <button className="text-white ml-auto lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <ul className="text-white hidden lg:flex items-center space-x-16 ml-20">
        <li className="flex items-center space-x-2">
          <i class="bi bi-terminal"></i>
          <span>About</span>
        </li>
        <li className="flex items-center space-x-2">
          <i class="bi bi-people"></i>
          <span>Team</span>
        </li>
        <li className="flex items-center space-x-2">
          <i class="bi bi-award"></i>
          <span>Projects</span>
        </li>
        <li className="flex items-center space-x-2">
          <i class="bi bi-book"></i>
          <span>Blog</span>
        </li>
      </ul>
      <button className="bg-[#111728] px-7 py-2 border border-[#202840] text-white ml-auto rounded-full text-sm hidden lg:block">
        Sign in
      </button>
    </div>
  );
}

export default Navbar;
