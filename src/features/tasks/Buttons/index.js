import { Box, BoxButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  <Box>
    {tasks.length > 0 && (
      <>
        <BoxButton
          onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </BoxButton>
        <BoxButton
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </BoxButton>
      </>
    )}
  </Box>



export default Buttons;