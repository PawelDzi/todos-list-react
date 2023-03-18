
import Section from "../../../common/Section";
import Title from "../../../common/Title";
import { Container } from "../../../common/Container/styled"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Title title="Szczegóły zadania" />

      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={!!task &&(
          <><strong>Ukończono:</strong>{task.done ? "Tak" : "Nie"}</>
        )}
      />
    </Container>
  );
}

export default TaskPage;