import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

export default () => {
    const store = createStore(rootReducer,  (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {} )

    store.subscribe(() => {  localStorage['redux-store'] = JSON.stringify(store.getState()) })
    
    return store;
}
