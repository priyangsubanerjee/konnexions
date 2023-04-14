import Introduction from "@/components/Fragments/Introduction";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div className="fixed inset-0 h-screen w-screen bg-[#0b0f1e] overflow-hidden">
      <div className="fixed z-30 top-0 inset-x-0 h-16 px-6 flex items-center w-full justify-between">
        <h1 className="text-white text-2xl font-bold">Logo.</h1>
        <button className="text-white">
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
      </div>
      <div className="relative h-screen w-screen overflow-y-auto overflow-x-hidden">
        <img
          src="/blueGradient.png"
          className="w-full h-[350px] scale-[2] object-contain absolute left-0 -translate-y-[30%] -translate-x-1/2 top-[0px]"
          alt=""
        />
        <img
          placeholder="blur"
          src="/maroonGradient.png"
          className="w-[500px] h-[500px] scale-[2] object-contain absolute right-0 translate-x-1/2 top-[600px]"
          alt=""
        />

        <img
          src="/codeBlock.png"
          className="absolute right-0 translate-x-[40%] brightness-50 opacity-30 top-20"
          alt=""
        />
        <div className="absolute inset-0 z-20 pt-24 px-6">
          <Introduction />
          <div className="team mt-24 pb-44">
            <div>
              <h1 className="text-white text-xl text-center font-extrabold">
                Lorem ipsum dolor
              </h1>
              <p className="text-center text-slate-200 mt-1">
                Lorem ipsum dolor sit amet.
              </p>
              <div className="mt-16 flex justify-center">
                <div className="h-[290px] w-[250px] relative">
                  <img
                    src="/teamMemberBorder.png"
                    className="absolute h-full w-full inset-0"
                    alt=""
                  />
                  <div className="absolute h-full w-full">
                    <div className="p-2">
                      <img
                        src="/demoTeam.png"
                        className="rounded-tr-xl rounded-tl-lg"
                        alt=""
                      />
                    </div>
                    <div className="mt-3">
                      <h2 className="text-lg font-bold text-white text-center">
                        Joseph
                      </h2>
                    </div>
                    <div className="flex items-center w-full mt-3 px-[1px]">
                      <div className="h-[1px] bg-gradient-to-r from-white/40 to-transparent w-full"></div>
                      <div className="shrink-0 text-white bg-white/10 px-4 py-2 rounded-lg text-sm">
                        Devops Lead
                      </div>
                      <div className="h-[1px] bg-gradient-to-r to-white/40 from-transparent w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
