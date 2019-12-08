import * as Actions from '../actions/hello.actions';

const initialState = {
    message: 'initial value in store',
    avital: [],
    yariv: 42,
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case Actions.SET_MESSAGE:
            // state['message'] = action.payload;
            // {...state, todo: [...state.todo, ]}
            return {...state, message: action.payload};
        default:
            return state;
    }
}