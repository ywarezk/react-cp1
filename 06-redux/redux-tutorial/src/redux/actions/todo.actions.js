
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