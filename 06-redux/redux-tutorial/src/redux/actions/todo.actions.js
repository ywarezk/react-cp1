
export const SET_TASKS = '[todo] Set Tasks';
export const SET_IS_LOADING = '[todo] Set Is Loading';

export function setTasks(tasks) {
    return {
        type: SET_TASKS,
        payload: tasks
    }
}

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading
    }
}

export function fetchTasks() {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        dispatch(setIsLoading(false));
        dispatch(setTasks(tasks));
    }
}