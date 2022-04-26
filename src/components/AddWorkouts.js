import { useState } from "react";

export default function AddWorkouts(props) {
  const initialFormState = { id: null, date: "", distance: "" };
  const [workout, setWorkout] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    setWorkout({ ...workout, [name]: value });
  };

  function isValidDate(date) {
    let regex = new RegExp(
      "([0-9]{4}[.](0[1-9]|1[0-2])[.]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[.](0[1-9]|1[0-2])[.][0-9]{4})"
    );
    let dateOk = regex.test(date);
    if (dateOk) {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!workout.date || !workout.distance) {
      return alert("Заполните все поля!");
    } else if (isValidDate(workout.date) === false) {
      return alert("Введите дату в правильном формате! Пример: 12.12.2012");
    } else {
      return setWorkout(initialFormState), props.addWorkout(workout);
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
