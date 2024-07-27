import Image from "next/image";
import baby from "./images/download.jpeg";

export default function Home() {
  return (
    <main className="border border-red-600 bg-black  w-full flex min-h-screen flex-col items-center justify-start px-4">
      <div className="border border-green-600 flex py-3 w-full justify-between">
        <div className="flex items-center">
          <button className="border border-red-600 hover:opacity-55">
            <Image src={baby} alt="" width={64} />
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div className="border border-blue-600 rounded-full flex w-64 h-8 cursor-text">
            <input
              className="justify-left p-1 pl-3 bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex pr-3">
          <button className="pr-5">Billing</button>
          <button className="bg bg-red-600 rounded-lg justify-end hover:bg-transparent hover:text-red-600 hover:border border-red-600 p-3 bold flex items-center">
            Go nomad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>
      <div className="parent border flex border-yellow-400 w-full justify-center">
        <div className="flex flex-col w-1/2">
          <div className="border border-red-600"> img </div>
          <div className="flex flex-col">
            <h1 className="bold text-4xl"> Go nomad and live anywhere</h1>
            <p className="text-lg">
              Join the #1 global community of 34,128 remote workers living and
              traveling around{" "}
              <p className="text-lg">
                the world since 2014. Don't go at it alone, meet other nomads
                and get together!
              </p>
            </p>
          </div>
          <div className="flex -space-x-2">
            <div className="border border-white rounded-full h-8 w-8 z-[10] background bg-red-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[9] background bg-orange-500"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[8] background bg-yellow-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[7] background bg-green-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[6] background bg-blue-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[5] background bg-indigo-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[4] background bg-violet-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[3] background bg-red-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[2] background bg-orange-600"></div>
            <div className="border border-white rounded-full h-8 w-8 z-[1] background bg-yellow-600"></div>
            <div className="border border-white rounded-full h-8 w-8 background bg-green-600"></div>
          </div>
          <button className="flex flex-col text-lg">
            <div>
              🍹 <span className="underline">Attend 378 meetups/year</span> in
              100+ cities
            </div>
            <div>
              ❤️ <span className="underline">Meet new people</span> for dating
              and friends
            </div>
            <div>
              🧪 <span className="underline">Research destinations</span> and
              find your best place to live and work
            </div>
            <div>
              🌎 <span className="underline">Keep track of your travels </span>
              and record where you've been
            </div>
            <div>
              💬 <span className="underline">Join Nomad List chat</span> and
              find your community on the road
            </div>
          </button>
        </div>
        <div className="flex-wrap flex-col-1 w-1/4 border border-red-500 rounded-md p-4 space-y-2">
          <div className="border border-green-500 rounded-md pt-6 h-32">
            video
          </div>
          <div className="border border-blue-600 rounded-lg flex cursor-text h-8">
            <input
              className="justify-left p-1 pl-3 bg-transparent focus:outline-none"
              placeholder="Type your email..."
            />
          </div>
          <button className="bg bg-red-600 rounded-lg justify-end hover:bg-transparent hover:text-red-600 hover:border border-red-600 bold w-full p-3 flex items-center h-8">
            Go Nomad
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
          <div className="text-xs">
            If you already have an account, we'll log you in{" "}
          </div>
        </div>
      </div>
    </main>
  );
}
