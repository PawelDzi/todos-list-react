import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="list">
    {tasks.map(task => (
      <li
        className={`list__li${task.done && hideDoneTasks ? " tasks__item--hidden" : ""}`}
      >
        <button className="button__done"> {task.done ? "✔" : ""}</button>
        <span className={`line${task.done ? " line__through" : ""}`}>
          {task.content}
        </span>
        <button className="button__remove">🗑</button>
      </li>
    ))}
  </ul>
);

export default Tasks;