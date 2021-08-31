import { createStore } from 'redux';
//hold app state
import reducers from './reducers';
export default createStore(reducers);
