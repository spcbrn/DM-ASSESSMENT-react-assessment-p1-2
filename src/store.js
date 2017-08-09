import {createStore} from 'redux';
import reducer from './ducks/mainReducer';


export default createStore(reducer)