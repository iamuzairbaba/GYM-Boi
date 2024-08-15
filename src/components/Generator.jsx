import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/nerdstrong";
import Button from "./Button";

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

export default function Generator({
  craze,
  setCraze,
  muscles,
  setMuscles,
  goals,
  setGoals,
  updateWorkout,
}) {
  const [showModal, setShowModal] = useState(false);
  const updateMuscles = (muscleGroup) => {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (setMuscles.length > 3) {
      return;
    }

    if (craze !== "individual") {
      setMuscles([muscleGroup]);
      setShowModal(false);
      return;
    }

    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) setShowModal(false);
  };
  return (
    <SectionWrapper
    id={'generate'}
      header={"Generate Gain Train"}
      title={["It is", "Gains,", "Grins", "and a", "few Tears", "Time"]}
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
              onClick={() => {
                setCraze(type);
                setMuscles([]);
              }}
              className={`bg-slate-950 duration-200 hover:border-blue-600 border py-3 rounded-lg ${
                type === craze ? "border-blue-600 rounded-lg" : ""
              }`}
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
          <p className="capitalize">
            {muscles.length === 0 ? `Select Muscle Groups` : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(craze === "individual"
              ? WORKOUTS[craze]
              : Object.keys(WORKOUTS[craze])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={`hover:text-blue-400 ${
                    muscles.includes(muscleGroup) ? "text-blue-400" : ""
                  }`}
                >
                  <p className="uppercase">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title="Lock on Goal"
        description={"Lock Your Focus, Own Your Future"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              key={schemeIndex}
              onClick={() => {
                setGoals(scheme);
              }}
              className={`bg-slate-950 duration-200 hover:border-blue-600 border py-3 rounded-lg ${
                scheme === goals ? "border-blue-600" : ""
              }`}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
