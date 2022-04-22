import React from "react";

function Form(props) {
  return (
    <div>
      <div>
        <div className="title-form">
          <span>Дата (ДД.ММ.ГГ)</span>
          <span>Пройдено км</span>
          <span>Действия</span>
        </div>
      </div>
      <div className="form">
        {props.workouts.length > 0 ? (
          props.workouts
            .map((w) => (
              <div className="form-data" key={w.id}>
                <span>{new Date(w.date).toDateString()}</span>
                <span>{w.distance}</span>
                <div>
                  <button
                    className="button delete"
                    onClick={() => props.deleteWorkout(w.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            ))
            .sort((a, b) => (a.date > b.date ? 1 : -1))
        ) : (
          <div className="no-workouts">
            <span>No workouts</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
