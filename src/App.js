import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Title from "./Title";
import Container from "./Container"

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Title title="Lista zadań"/>

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDone={hideDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} />
        }
      />


    </Container>
  );
}

export default App;
