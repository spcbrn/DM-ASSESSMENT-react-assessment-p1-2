import {createStore, applyMiddleware} from 'redux';
import reducer from './ducks/mainReducer';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer,
    applyMiddleware(
        promiseMiddleware()
    ))

// export default createStore(reducer)