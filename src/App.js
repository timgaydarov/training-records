import "./App.css";
import { useState } from "react";

import AddWorkouts from "./components/AddWorkouts";
import Form from "./components/Form";

function App() {
  const workoutData = [];
  const [workouts, setWorkouts] = useState(workoutData);

  const addWorkout = (w) => {
    w.id = workouts.length + 1;
    setWorkouts([...workouts, w]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <div className="wrapper">
      <AddWorkouts addWorkout={addWorkout} />
      <Form workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
