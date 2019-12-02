/**
 * fetch the todos from the server
 * display them
 */

 import React, {useState, useEffect} from 'react';
 import todoService from '../../services/todo.service';
 import TodoItem from '../TodoItem/TodoItem';

export default () => {
    const [tasks, setTasks] = useState([]);

    // this function will run after the render
    // with empty array it equals componentDidMount
    useEffect(() => {
        todoService.fetchTasks()
            .then((tasks) => {
                setTasks(tasks);
            })
    }, []);

    useEffect(() => {
        
    })

    return (
        <ul>
            {
                tasks.map((taskObj) => {
                    return <TodoItem task={taskObj} key={taskObj.id} />
                })
            }
        </ul>
    )
}