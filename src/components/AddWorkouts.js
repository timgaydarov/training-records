import React from "react";
import { useState } from "react";

export default function AddWorkouts(props) {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!workout.date || !workout.distance) return;
    props.addWorkout(workout);
    setWorkout(initialFormState);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <span className="title">Дата (ДД.ММ.ГГ)</span>
        <input
          className="input-style"
          type="date"
          name="date"
          value={workout.date}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <span className="title">Пройдено км</span>
        <input
          className="input-style"
          type="number"
          name="distance"
          value={workout.distance}
          onChange={handleInputChange}
        />
      </div>
      <button className="ok-btn">OK</button>
    </form>
  );
}
