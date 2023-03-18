import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { BoxButton } from "../Buttons/styled"
import { Load } from "./styled"

const SampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <BoxButton onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading
                    ? <Load>Ładowanie...</Load>
                    : "Pobierz przykładowe zadania"
            }
        </BoxButton>
    )
};

export default SampleTasks;