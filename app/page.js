import Image from "next/image";

export default function Home() {
  return (
    <main className="border border-red-600 w-full flex min-h-screen flex-col items-center justify-start px-4">
      <div className="border border-green-600 flex py-3 w-full justify-between">
        <div className="flex">
          <button className="border border-red-600 "> Img </button>
          <div className="border border-blue-600 flex">Search</div>
        </div>
        <div>
          <button className="justify-end">Go Nomad</button>
        </div>
      </div>
    </main>
  );
}
