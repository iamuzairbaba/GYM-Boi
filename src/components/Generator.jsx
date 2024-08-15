import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/nerdstrong";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  const [showModal, setShowModal] = useState(false);
  const [craze, setCraze] = useState("individual");
  const [musclea, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");
  return (
    <SectionWrapper
      header={"Generate Gain Train"}
      title={["It Is", "Gains,", "Grins", "and a", "few Tears", "Time"]}
    >
      <Header
        index={"01"}
        title="Choose Your Craze"
        description={"Select Your Mayhem: Madness or Madness, Your Pick."}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              key={typeIndex}
              className="bg-slate-950 duration-200 hover:border-blue-600 border border-blue-400 py-3 rounded-lg"
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title="Become Juggernaut"
        description={"Select Muscles For Annihilation."}
      />
      <div className="bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={() => {
            setShowModal(!showModal);
          }}
          className="relative p-3 flex items-center justify-center"
        >
          <p>Select Muscle Groups</p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && <div></div>}
      </div>

      <Header
        index={"03"}
        title="Lock on Goal"
        description={"Lock Your Focus, Own Your Future"}
      />

      <div className="grid grid-cols-3 gap-3">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              className="bg-slate-950 duration-200 hover:border-blue-600 border border-blue-400 py-3 rounded-lg"
            >
              <p className="capitalize text-sm sm:text-base">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

    </SectionWrapper>
  );
}
