import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`list__li${task.done && hideDone ? " tasks__item--hidden" : ""}`}
        onClick={() => toggleTaskDone(task.id)}
      >
        <button className="button__done"> {task.done ? "✔" : ""}</button>
        <span className={`line${task.done ? " line__through" : ""}`}>
          {task.content}
        </span>
        <button
          className="button__remove"
          onClick={() => removeTask(task.id)} 
          >
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;