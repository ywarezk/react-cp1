/**
 * we want to create the redux store
 * store holds the state which is our data between components
 * state is immutable
 */

 import {createStore} from 'redux';
 import reducer from './reducers';
 import { composeWithDevTools } from 'redux-devtools-extension';


 const store = createStore(reducer, composeWithDevTools(
        
    ));

 export default store;