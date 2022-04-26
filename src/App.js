import { useState } from "react";
import AddWorkouts from "./components/AddWorkouts";
import Workout from "./components/Workout";

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    workout.id = workouts.length + 1;

    setWorkouts(
      [...workouts, workout].sort((a, b) => {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      })
    );

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

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div className="wrapper">
      <AddWorkouts addWorkout={addWorkout} />
      <Workout workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  );
}

export default App;
