import { takeEvery, call, put, delay, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
    }
}

export function* watchFetchExampleTasks() {
    console.log("saga jest podłączona");
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}