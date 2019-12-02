/**
 * grab the todo list from the server
 * display the list
 */

 import React from 'react';
 import todoService from '../../services/todo.service';
 import TodoItem from '../TodoItem/TodoItem';

 export default class TodoList extends React.Component {
    state = {
        tasks: []
    }

    async componentDidMount() {
        const tasks = await todoService.fetchTasks();
        this.setState({
            tasks
        })
    }

     render() {
         return (
            <ul>
                {
                    this.state.tasks.map((taskObj) => {
                        return <TodoItem key={taskObj.id} task={taskObj} />
                    })
                }
                
            </ul>
         );
     }
 }