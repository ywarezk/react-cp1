import * as Actions from '../actions/todo.actions';

const initialState = {
    tasks: [],
    sort: 'date',
    filter: 'creator',
    isLoading: true
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case Actions.SET_IS_LOADING: 
            return {...state, isLoading: action.payload};
        case Actions.SET_TASKS:
            return {...state, tasks: action.payload}
        default:
            return state;
    }
}