import React from "react";
import "./page.css";

function Page() {
  return (
    <>
      <div className="relative">
        <div className="heading max-sm:ml-5 ml-20 mt-10 pt-10">
          <div className="flex gap-2">
            <h1 className="inline-block text-white text-8xl">Work</h1>
            <img className="w-10 inline-block" src="/star.svg" alt="" />
          </div>
          <h1 className="text-8xl text-white">smarter,</h1>
          <h1 id="faster" className=" relative z-10 text-8xl text-white inline">
            faster
          </h1>
        </div>
        <div className="note max-sm:mt-10 max-sm:ml-10 ml-20 max-w-xs mt-7 pr-6">
          <p className="text-md text-gray-400">
            Nunito connects everyone in the design processes so teams can
            deliver better products, faster.🙌
          </p>
        </div>
        <button className=" max-sm:ml-24 ml-20 mt-3 bg-white text-black text-lg font-semibold px-6 py-2  rounded-3xl hover:bg-transparent hover:text-white hover:border-2 hover:border-white ">
          Try it for free
        </button>

        <div className="logos flex max-sm:grid-cols-2 max-sm:ml-5 max-sm:mt-10 gap-10 items-center ml-20 mt-5  z-10">
          <img className="w-16" src="/google.png" alt="" />
          <img className="w-12" src="/netflix.png" alt="" />
          <div className="spotify flex items-center">
            <img className="w-4" src="/spotify.png" alt="" />
            <img className="w-12" src="/spotify2.png" alt="" />
          </div>
          <div className="amazone flex ">
            <img className="w-16 pt-2" src="/amazone.png" alt="" />
          </div>
        </div>
        <div className="max-md:relative max-sm:right-0 max-sm:top-0 max-sm:mt-10 absolute right-20 top-10 z-0">
          <img src="/Frame.svg" alt="" />
        </div>
      </div>
    </>
  );
}

export default Page;
