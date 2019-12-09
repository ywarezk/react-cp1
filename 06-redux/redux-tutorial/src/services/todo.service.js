import store from '../redux/store';
import { setIsLoading } from '../redux/actions/todo.actions';

class TodoService {

    /**
     * fetch the tasks + change the state
     */
    fetchTasks = async () => {
        store.dispatch(setIsLoading(true));
        const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const tasks = await response.json();
        store.dispatch(setIsLoading(false));
        store.dispatch(setTasks(tasks));
    }
}

export default new TodoService();