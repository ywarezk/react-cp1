import * as Actions from '../actions/todo.actions';

// 1 - combineReducers - divide the state
// 2 - No derived state 
// 3 - Serializable - {hello: 'world'}, {hello: () => 'world'}
// 4 - Normalize
// 5 - consider object instead of array

// class Person {
//     constructor() {
//         this.firstName = 'yariv'
//         this.lastName = 'katz'
//     }

//     get fullName() {
//         return this.firstName + ' ' + this.lastName
//     }
// }

const initialState = {
    tasks: [],
    // tasks: {
    //     10: {id: 10, ..., user: 42},
    //     20: {id: 20, ...}
    // },
    // users: {
    //     42: {firstName: ...}
    // }
    //     {title: '...', user: 10}
    // ],
    // users: [
    //     {id: 10, firstName: ...}
    // ]
    sort: 'date',
    filter: 'creator',
    isLoading: true,
    numTasks: 0
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case Actions.SET_IS_LOADING: 
            return {...state, isLoading: action.payload};
        case Actions.SET_TASKS:
            return {...state, tasks: action.payload, numTasks: action.payload.length}
        default:
            return state;
    }
}

export function numTaskSelector(tasks) {
    return tasks.length
}