import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function NavBar() {
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) return;
      const resp = await axios.get(
        process.env.NODE_ENV == "production"
          ? "https://konnexions.netlify.app/api/logos"
          : "http://localhost:3000/api/logos"
      );
      setData(resp.data.data);
    }
    fetchData();
  }, [data]);

  if (!data) return null;

  const tabs = [
    { name: "Home", link: "/" },
    { name: "Team", link: "/team" },
    { name: "Resources", link: "/resources" },
    { name: "Contact", link: "/contact" },
  ];

  return (<>
    <nav className="fixed z-30 top-0 inset-x-0 bg-transparent h-20 flex items-center justify-between lg:px-24 px-6 backdrop-blur">
      <div className="flex items-center space-x-5 text-white text-sm lg:text-xl">
        <Link href="https://kiit.ac.in/" target="_blank" className="w-full max-w-[100px] max-h-[100px] overflow-hidden">
          <img src={data.kiit.url} alt="kiit" className="w-full h-auto" />
        </Link>
        <Link href="/" className="w-full max-w-[100px] max-h-[100px] overflow-hidden">
          <img src={data.konnexion.url} alt="konnexions" className="w-full h-auto" />
        </Link>
        <Link href="https://ksac.kiit.ac.in/" target="_blank" className="w-full max-w-[100px] max-h-[100px] overflow-hidden">
          <img src={data.ksac.url} alt="ksac" className="w-full h-auto" />
        </Link>
      </div>
      <ul className="hidden md:flex items-center space-x-16 ml-auto">
        {tabs.map(tab => { return (
          <li key={tab.name} className="text-white/70 hover:text-white text-sm transition-all">
            <Link href={tab.link}>{tab.name}</Link>
          </li> )}
        )}
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
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
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
              KONNEXIONS
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
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul className="px-6 text-center space-y-12 mt-16">
          {tabs.map(tab => { return (
            <li key={tab.name} className="text-white/70 hover:text-white text-2xl transition-all" onClick={() => setSidenavOpen(false)}>
              <Link href={tab.link}>{tab.name}</Link>
            </li> )}
          )}
        </ul>
      </div>
    )}
  </>);
}