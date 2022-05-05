import { useState } from "react";
import AddWorkouts from "./components/AddWorkouts";
import Workout from "./components/Workout";
import { sortByDate } from "./utils";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    workout.id = workouts.length + 1;

    setWorkouts([...workouts, workout].sort(sortByDate));
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  const updateDistance = (workout) => {
    const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
    const existedDate = workouts[dateIndex];
    const newWorkout = {
      ...existedDate,
      distance: +existedDate.distance + +workout.distance,
    };
    const newWorkouts = [...workouts];
    newWorkouts[dateIndex] = newWorkout;

    setWorkouts(newWorkouts);
  };

  return (
    <div className="wrapper">
      <AddWorkouts addWorkout={addWorkout} updateDistance={updateDistance} />
      <Workout workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
