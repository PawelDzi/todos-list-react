import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { BoxButton } from "../Buttons/styled"

const SampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <BoxButton onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? "Ładowanie..."
                    : "Pobierz przykładowe zadania"
            }
        </BoxButton>
    )
};

export default SampleTasks;