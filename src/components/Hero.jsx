import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center max-w-[800px] w-full mx-auto justify-center text-center">
      <div className="flex flex-col gap-4">
        <p>IT IS TIME TO</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-blue-400">STRENGTH</span>IFY
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        We're not just{" "}
        <span className="text-blue-400 font-medium">building strength</span>,
        we're building a community of slightly-sweaty, somewhat-sore, but{" "}
        <span className="text-blue-400 font-medium">totally-supportive</span>{" "}
        friends who will
        <span className="text-blue-400 font-medium">spot</span> us when we need
        it most.
      </p>
      <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duraton-200"><p>Accept and Begin</p></button>
    </div>
  );
}
