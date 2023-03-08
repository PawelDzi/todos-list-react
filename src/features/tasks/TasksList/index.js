import { List, Item, Content, Button, ToggleDoneButton, ToggleRemoveButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item
        key={task.id}
        hidden={task.done && hideDone}
      >
        <ToggleDoneButton
          toggleDone
          onClick={() => toggleTaskDone(task.id)}
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
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ToggleRemoveButton>
      </Item>
    ))}
  </List>
);

export default TaskList;