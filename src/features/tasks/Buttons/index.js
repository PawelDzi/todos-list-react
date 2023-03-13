import { useSelector, useDispatch } from "react-redux"
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  selectHideDone,
  fetchExampleTasks
} from "../tasksSlice";
import { Box, BoxButton } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <Box>
      {!areTasksEmpty && (
        <>
          <BoxButton
            onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </BoxButton>
          <BoxButton
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </BoxButton>
        </>
      )}
    </Box>
  )
};

export default Buttons;