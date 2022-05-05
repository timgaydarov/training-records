import { useState } from "react";
import { isValidDate } from "../utils";

export default function AddWorkouts(props) {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!workout.date || !workout.distance) {
      return alert("Заполните все поля!");
    } else if (isValidDate(workout.date) === false) {
      return alert("Введите дату в правильном формате! Пример: 12.12.2012");
    } else {
      setWorkout(initialFormState);
      props.addWorkout(workout);
      props.updateDistance(workout);
      return;
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <span className="title">Дата (ДД.ММ.ГГ)</span>
          <input
            className="input-style"
            type="text"
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
      <div>
        <div className="title-form">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
      </div>
    </div>
  );
}
