import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import Section from "./../../common/Section";
import Title from "../../common/Title";
import { Container } from "../../common/Container/styled"

function Tasks() {
  return (
    <Container>
      <Title title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList />
        }
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
}

export default Tasks;