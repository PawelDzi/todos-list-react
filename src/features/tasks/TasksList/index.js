import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, ToggleDoneButton, ToggleRemoveButton } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
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
            {task.content}
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