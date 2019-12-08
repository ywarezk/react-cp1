/**
 * when we have the token send a request to the server
 */

 import React, {useEffect, useState, useContext} from 'react';
 import PropTypes from 'prop-types';
 import JwtContext from '../../contexts/jwt-context';
 import jwtService from '../../services/jwt.service';

 const TodoList = () => {
    // const token = props.token

    // const {token} = useContext(JwtContext);

    const [tasks, setTasks] = useState([]);

    jwtService.jwt$.subscribe((token) => {
        if (!token) return;

        fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(tasks => setTasks(tasks))
    })

    // useEffect(() => {
    //     if (!token) return;

    //     fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${token}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(tasks => setTasks(tasks))

    // }, [token])

    return (
        <ul className="list-group">
            {
                tasks.map(singleTask =>  
                    (
                        <li className="list-group-item" key={singleTask.id}>
                            <h5>
                                { singleTask.title }
                            </h5>
                            <p>
                                { singleTask.description }
                            </p>
                        </li>
                    )
                )
            }
        </ul>
    )
 }

 TodoList.propTypes = {
     token: PropTypes.string
 }

 TodoList.defaultProps = {
     token: null
 }

 export default TodoList