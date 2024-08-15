import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/generateWorkout";

function App() {
  const [workout, setWorkout] = useState(null);

  const [craze, setCraze] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goals, setGoals] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length === 0) return;
    let newWorkout = generateWorkout({ craze, muscles, goals });
    setWorkout(newWorkout);
    window.location.href = '#workout'
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-700 to-slate-950 text-white sm:text-base">
      <Hero />
      <Generator
        updateWorkout={updateWorkout}
        craze={craze}
        setCraze={setCraze}
        muscles={muscles}
        setMuscles={setMuscles}
        goals={goals}
        setGoals={setGoals}
      />
      {workout && (
        <Workout
          workout={workout}
          craze={craze}
          muscles={muscles}
          goals={goals}
        />
      )}
    </main>
  );
}

export default App;
