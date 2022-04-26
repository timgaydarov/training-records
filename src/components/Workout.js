export default function Workout(props) {
  if (props.workouts.length === 0) {
    return (
      <div className="form">
        <div className="no-workouts">
          <span>No workouts</span>
        </div>
      </div>
    );
  }

  return (
    <div className="form">
      {props.workouts.map((workout) => (
        <div className="form-data" key={workout.id}>
          <span>{workout.date}</span>
          <span>{workout.distance}</span>
          <div>
            <span
              className="btn-delete"
              onClick={() => props.deleteWorkout(workout.id)}
            >
              ✘
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
