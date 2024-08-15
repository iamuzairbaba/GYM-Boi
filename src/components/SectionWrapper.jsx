import React from "react";

export default function SectionWrapper(props) {
  const { children, header, title } = props;
  return (
    <section className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="sm:font-semibold text-xl md:text-4xl lg:text-5xl">
          {title[0]} <span className="uppercase text-blue-400">{title[1]}</span>{" "}
          <span className="uppercase text-blue-400">{title[2]}</span> {title[3]}{" "}
          <span className="uppercase text-blue-400">{title[4]}</span> {title[5]}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
}
