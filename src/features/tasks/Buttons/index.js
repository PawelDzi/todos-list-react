import { useSelector, useDispatch } from "react-redux"
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { Box, BoxButton } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Box>
      {tasks.length > 0 && (
        <>
          <BoxButton
            onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </BoxButton>
          <BoxButton
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </BoxButton>
        </>
      )}
    </Box>
  )
};

export default Buttons;