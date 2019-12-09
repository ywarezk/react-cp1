/**
 * we want to create the redux store
 * store holds the state which is our data between components
 * state is immutable
 */

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
        thunk
    )
));

 export default store;