import React from "react";
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";

export default function Workout({ workout }) {
  return (
    <SectionWrapper
    id={'workout'}
      header={"Today's goals:"}
      title={["", "Sweat,", "Swear", "and", "Repeat", ""]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, index) => {
          return <ExerciseCard exercise={exercise} key={index} index={index}/>;
        })}
      </div>
    </SectionWrapper>
  );
}
