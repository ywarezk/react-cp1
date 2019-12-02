/**
 * is incharge of interacting with the todo rest server api
 */

 class TodoService {

    /**
     * @returns {Promise<Task[]>}
     */
    fetchTasks = async () => {
        try {
            const response = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
            const tasks = await response.json();
            return tasks;
        } catch(err) {
            return []
        }
    }
 }

 export default new TodoService();