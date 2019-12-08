import {combineReducers} from 'redux';
import todoReducer from './todo.reducer';
import helloReducer from './hello.reducer';


// function(reducersObj) {
//     return function(state, action) {
//         const result = {}
//         for (let key of Object.keys(reducersObj)){
//             result[key] = reducersObj[key](state,action);    
//         }
//     }
// }


const allReducers = combineReducers({
    hello: helloReducer,
    todo: todoReducer
});

export default allReducers;