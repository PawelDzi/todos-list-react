import Form from "./Form";
import TaskList from "./TasksList";
import Buttons from "./Buttons";
import SampleTasks from "./SampleTasks";
import Search from "./Search";
import Section from "../../../common/Section";
import Title from "../../../common/Title";
import { Container } from "../../../common/Container/styled"

function TasksPage() {
  return (
    <Container>
      <Title title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        sampleTask={<SampleTasks />}
        body={<Form />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
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

export default TasksPage;