/**
 * display a single item in the list
 */

 import React from 'react';
 import PropTypes from 'prop-types';

//  const TodoItem = () => {
//     return (
//         <li>
//             {this.props.task.title}
//         </li> 
//      )
//  }

//  TodoItem.propTypes = {
//     task: PropTypes.object.isRequired
//  }

//  export default TodoItem

 export default class TodoItem extends React.Component {
     static propTypes = {
         task: PropTypes.object.isRequired
     }

    //  static defaultProps = {
    //     task: {}
    //  }

    render() {
        return (
           <li>
               {this.props.task.title}
           </li> 
        )
    }
 }