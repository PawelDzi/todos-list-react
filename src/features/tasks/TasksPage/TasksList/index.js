import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Content, ToggleDoneButton, ToggleRemoveButton } from "./styled";
import { Link, useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <ToggleDoneButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content
            done={task.done}
          >
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <ToggleRemoveButton
            toggleRemove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </ToggleRemoveButton>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;