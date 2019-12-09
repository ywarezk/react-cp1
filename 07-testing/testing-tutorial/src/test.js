/**
 * Entry point file for running the tests
 */

import { configure } from 'enzyme';
import './index.css';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

function importAll (r) {
    r.keys().forEach(r);   
}
  
importAll(require.context('./', true, /\.test\.js$/));