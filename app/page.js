import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-red-600 bg-black  w-full flex min-h-screen flex-col items-center justify-start px-4">
      <div className="border border-green-600 flex py-3 w-full justify-between">
        <div className="flex">
          <button className="border border-red-600 hover:opacity-55">
            Img
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
          <button className="bg bg-red-600 rounded-lg justify-end hover:bg-transparent hover:text-red-600 hover:border border-red-600 p-3 bold">
            Go Nomad
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
              class="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </div>
      </div>
      <div className="parent border border-yellow-400 w-full justify-center">
        <div className="border border-red-600"> img </div>
        <div className="flex flex-col">
          <h className="bold text-4xl"> Go nomad and live anywhere</h>
          <p className="text-lg">
            Join the #1 global community of 34,128 remote workers living and
            traveling around the world since 2014. Don't go at it alone, meet
            other nomads and get together!
          </p>
        </div>
        <div className="flex">
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
          <div className="border border-red-600 rounded-full h-8 w-8 ">
            image
          </div>
        </div>
        <button className="flex flex-col text-lg">
          <h>🍹 Attend 378 meetups/year in 100+ cities</h>
          <h>❤️ Meet new people for dating and friends</h>
          <h>
            🧪 Research destinations and find your best place to live and work
          </h>
          <h>🌎 Keep track of your travels and record where you've been</h>
          <h>💬 Join Nomad List chat and find your community on the road</h>
        </button>
        <div className="flex">
          <div>sidebar</div>
        </div>
      </div>
    </main>
  );
}
