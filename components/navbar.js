import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  return (
    <div>
      <nav className="fixed z-30 top-0 inset-x-0 bg-transparent h-20 flex items-center justify-between lg:px-24 px-6 backdrop-blur">
        <div>
          <h1 className="text-white font-semibold text-2xl lg:text-3xl">
            Logo
          </h1>
        </div>
        <ul className="hidden md:flex items-center space-x-16">
          <li className="text-white/70 hover:text-white text-sm transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white/70 hover:text-white text-sm transition-all">
            <Link href="/team">Team</Link>
          </li>
          <li className="text-white/70 hover:text-white text-sm transition-all">
            <Link href="/projects">Projects & Achievemets</Link>
          </li>
          <li className="text-white/70 hover:text-white text-sm transition-all">
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
        <div>
          <button
            onClick={() => setSidenavOpen(true)}
            className="block md:hidden text-white"
          >
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      {sidenavOpen && (
        <div className="fixed inset-0 bg-black z-30">
          <div className="flex items-center justify-between px-6 h-20">
            <div>
              <h1 className="text-white font-semibold text-2xl lg:text-3xl">
                Logo
              </h1>
            </div>
            <div>
              <button
                onClick={() => setSidenavOpen(false)}
                className="block md:hidden text-white"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="px-6 text-center space-y-12 mt-16">
            <li className="text-white/70 hover:text-white transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white/70 hover:text-white transition-all">
              <Link href="/team">Team</Link>
            </li>
            <li className="text-white/70 hover:text-white transition-all">
              <Link href="/projects">Projects & Achievemets</Link>
            </li>
            <li className="text-white/70 hover:text-white transition-all">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;

//   <nav className="w-full bg-transparent sticky top-0 left-0 right-0 z-10">
//     <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//       <div>
//         <div className="flex items-center justify-between py-3 md:py-5 md:block">
//           {/* LOGO */}
//           <Link href="/">
//             <h2 className="text-2xl text-cyan-600 font-bold ">LOGO</h2>
//           </Link>
//           {/* HAMBURGER BUTTON FOR MOBILE */}
//           <div className="md:hidden">
//             <button
//               className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//               onClick={() => setNavbar(!navbar)}
//             >
//               {navbar ? (
//                 <Image src="/close.png" width={30} height={30} alt="logo" />
//               ) : (
//                 <Image
//                   src="/ham.png"
//                   width={30}
//                   height={30}
//                   alt="logo"
//                   className="focus:border-none active:border-none"
//                 />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div
//           className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//             navbar ? "p-12 md:p-0 block" : "hidden"
//           }`}
//         >
//           <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//             <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-white hover:text-black md:hover:text-white md:hover:bg-transparent">
//               <Link href="/" onClick={() => setNavbar(!navbar)}>
//                 Home
//               </Link>
//             </li>
//             <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white hover:text-black md:hover:text-white md:hover:bg-transparent">
//               <Link href="/Team" onClick={() => setNavbar(!navbar)}>
//                 Team
//               </Link>
//             </li>
//             <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white hover:text-black md:hover:text-white md:hover:bg-transparent">
//               <Link
//                 href="/ProjectsAndAchievements"
//                 onClick={() => setNavbar(!navbar)}
//               >
//                 Projects & Achievemets
//               </Link>
//             </li>
//             <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-white hover:text-black md:hover:text-white md:hover:bg-transparent">
//               <Link href="/contact.js" onClick={() => setNavbar(!navbar)}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </nav>;
