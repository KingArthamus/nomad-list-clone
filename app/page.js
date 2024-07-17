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
          <button className="bg bg-red-600 rounded-lg justify-end hover:bg-transparent ">
            Go Nomad
          </button>
        </div>
      </div>
      <div className="border border-yellow-400 flex w-full justify-center">
        <p className="p-11">lorem </p>
      </div>
    </main>
  );
}
