import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";


function App() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-700 to-slate-950 text-white sm:text-base">
     <Hero />
     <Generator />
     <Workout />
    </main>
  );
}

export default App;
