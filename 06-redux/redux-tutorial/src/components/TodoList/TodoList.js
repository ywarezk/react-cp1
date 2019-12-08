/**
 * query the server
 * populates the redux state from the server
 * isLoading
 * tasks
 */

 import React, {useEffect} from 'react';
 import { connect } from 'react-redux';
 import {setIsLoading, setTasks} from '../../redux/actions/todo.actions';

 const TodoList = ({todoTasks, setIsLoading, setTasks}) => {

    useEffect(() => {
        setIsLoading(true);
        fetch('https://nztodo.herokuapp.com/api/task/?format=json')
            .then((response) => response.json())
            .then((tasks) => {
                setIsLoading(false);
                setTasks(tasks);
            })
    }, []);

    return (
        <ul>
            {
                todoTasks.map((singleTask) => <li key={singleTask.id}>{singleTask.title}</li>)
            }
        </ul>
    )

 }

 export default connect(
     function(state) {
         return {
            todoTasks: state.todo.tasks          
         }
     },
     {
        setIsLoading: setIsLoading,
        setTasks
     }
 )(TodoList);