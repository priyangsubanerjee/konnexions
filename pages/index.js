import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import NavBar from "@/components/navbar";
import Carousel from "@/components/carousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className="primary-header">
        <div className="container fs-600 fw-medium pt-14 pb-0">
          <NavBar />
          <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute z-10 rounded-full bg-gradient-to-br from-[#0047D2]/60 lg:from-[#0047D2] to-transparent -translate-x-1/2 -translate-y-1/2 blur-xl lg:blur-3xl"></div>
        </div>
      </header>
      <main className="bg-black text-white overflow-hidden">
        <section className="container pt-44 z-100">
          <div className="flex flex-col">
            <div>
              <h1 className="fs-1000 fw-bold flex justify-center">
                The IT & Web Society
              </h1>
              <p className="fs-675 fw-regular pt-14 flex justify-center">
                Connect • Learn • Innovate
              </p>
              <div className="fs-650 fw-regular pt-16 translate-x-1/2 w-1/2 flex justify-center text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                sequi neque labore maxime ratione accusamus magnam sed
                assumenda, excepturi officia ex modi explicabo, illo laudantium
                dolorum beatae, minus quisquam obcaecati.
              </div>
            </div>
            <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute rounded-full bg-gradient-to-br from-[#0047D2]/60 lg:from-[#0047D2] to-transparent translate-x-3/4 translate-y-1/2 blur-xl lg:blur-3xl"></div>
          </div>
        </section>

        <section className="pt-72 ">
          <div className="">
            <h2 className="fs-775 fw-semi-bold flex justify-center">
              Our Services
            </h2>
            <p className="fs-600 fw-regular flex justify-center">
              Lorem ipsum dolor sit.
            </p>
            <div className="container">
              <div
                style={{
                  maxWidth: 1200,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: 64,
                }}
                className="justify-items-center"
              >
                {/* <div>App Development</div>
                <div>App Development</div>
                <div>App Development</div> */}
                <Carousel show={3} infiniteLoop={true}>
                  <Image
                    src="/example1.svg"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="px-8"
                  />
                  <Image
                    src="/example2.svg"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="px-8"
                  />
                  <Image
                    src="/example1.svg"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="px-8"
                  />
                  <Image
                    src="/female.svg"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="px-8"
                  />
                  <Image
                    src="/male.svg"
                    alt="placeholder"
                    width={50}
                    height={50}
                    className="px-8"
                  />
                  <div className="border px-64 w-64 h-80 rounded-t-lg text-black flex flex-col">
                    <Image
                      src="/favicon.ico"
                      alt="placeholder"
                      width={50}
                      height={50}
                      className="px-8"
                    />
                    <div>his iasdfasfdafsd</div>
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute rounded-full bg-gradient-to-br from-[#B535B0]/60 lg:from-[#B535B0] to-transparent -translate-x-1/2 translate-y-1/3 blur-xl lg:blur-3xl"></div>
          </div>
        </section>

        <section className="pt-72 flex justify-center">
          <div className="container">
            <h2 className="fs-775 fw-semi-bold flex justify-center">Events</h2>
            <p className="fs-600 fw-regular flex justify-center">
              Lorem ipsum dolor sit.
            </p>
            <div
              style={{
                maxWidth: 1200,
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: 64,
              }}
              className="justify-items-center"
            ></div>
            <Carousel show={3} infiniteLoop={true}>
              <Image
                src="/example1.svg"
                alt="placeholder"
                width={50}
                height={50}
                className="px-8"
              />
              <Image
                src="/example2.svg"
                alt="placeholder"
                width={50}
                height={50}
                className="px-8"
              />
              <Image
                src="/example1.svg"
                alt="placeholder"
                width={50}
                height={50}
                className="px-8"
              />
              <Image
                src="/female.svg"
                alt="placeholder"
                width={50}
                height={50}
                className="px-8"
              />
              <Image
                src="/male.svg"
                alt="placeholder"
                width={50}
                height={50}
                className="px-8"
              />
            </Carousel>
          </div>
        </section>

        <section>
          <div className="container my-72 pb-80">
            <h2 className="fs-775 fw-semi-bold flex justify-center">
              Newsletter
            </h2>
            <p className="fs-600 fw-regular flex justify-center pt-6 pb-28">
              Lorem ipsum dolor sit.
            </p>
            <div className="container pt-16 bg-[#151515] rounded-lg z-100">
              <div className="container flex flex-row justify-center flex-wrap">
                <div className="flex flex-col justify-center">
                  <div className="pb-8 text-3xl fw-semi-bold flex">
                    Sign up for weekly newsletter
                  </div>
                  <div className="pb-10 w-1/2 fw-regular">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta quod atque doloribus distinctio totam cum, ut fugit.
                  </div>
                  {/* <form action="" className="pb-20 flex justify-left bg-red-300">
                    <input
                      type="email"
                      className="rounded-l-full w-1/3 h-16 border-slate-800 border bg-[#151515]"
                    />
                    <button className="rounded-full text-center text-base px-1">
                      <div className="-ml-6 h-16 pl-20 fw-medium text-black bg-white rounded-r-full flex items-center text-center text-base">
                      <span className="-ml-16">
                        Register
 
                      </span>
                      
                      </div>
                    </button>
                  </form> */}
                  <div className="mb-20 flex items-center justify-center overflow-hidden  bg-white rounded-full border w-1/2 z-50">
                    {/* <form action=""> */}
                    <input
                      type="email"
                      className="bg-transparent outline-none py-4 text-base text-black border  border-green-400 w-full"
                    />
                    {/* </form> */}
                    <div className="bg-[#151515] flex items-center px-4 text-white border border-white h-full hover:bg-blue-500 ease-in-out duration-300">
                      <button className="cursor-pointer">Register</button>
                    </div>
                  </div>
                </div>
                <div>
                  <Image
                    src=""
                    alt="newsletter"
                    width={100}
                    height={100}
                  ></Image>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[800px] lg:h-[1000px] w-[800px] lg:w-[1000px] absolute rounded-full bg-gradient-to-br from-[#0D5B52]/60 lg:from-[#0D5B52] to-transparent translate-x-3/4 -translate-y-1/2 blur-xl lg:blur-3xl"></div>
        </section>
      </main>
    </>
  );
}
