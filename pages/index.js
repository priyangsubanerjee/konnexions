import Introduction from "@/components/Fragments/Introduction";
import Team from "@/components/Fragments/Team";
import Navbar from "@/components/Navbar";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#0b0f1e] overflow-hidden">
      <Navbar />
      <div className="relative h-screen w-screen overflow-y-auto overflow-x-hidden">
        <img
          src="/blueGradient.png"
          className="w-[500px] h-[500px] z-0 scale-[2] blur-xl object-contain absolute left-0 -translate-y-[30%] -translate-x-1/2 top-[0px]"
          alt=""
        />
        <img
          placeholder="blur"
          src="/maroonGradient.png"
          className="w-[500px] h-[500px] z-0 scale-[2] blur-xl object-contain absolute right-0 translate-x-1/2 top-[600px] lg:top-[1000px]"
          alt=""
        />
        <img
          src="/codeBlock.png"
          className="absolute z-10 right-0 lg:top-20 translate-x-[40%] lg:translate-x-[10%] lg:h-[600px] brightness-50 opacity-30 lg:opacity-100 lg:brightness-95 top-36"
          alt=""
        />
        <img
          src="/blueGradient.png"
          className="hidden lg:block w-[500px] h-[500px] z-0 scale-[2] blur-xl object-contain absolute right-0 translate-y-[30%] translate-x-1/2 top-[0px] brightness-50"
          alt=""
        />
        <div className="absolute inset-0 z-20 pt-24 lg:pt-44">
          <Introduction />
          <Team className={"mt-24 lg:mt-56"} />
        </div>
      </div>
    </div>
  );
}
