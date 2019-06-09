import {createStore, combineReducers } from 'redux';
import bentoReducer from '../reducers/bento';
import filtersReducer from '../reducers/filters';


export default () => {

    const store = createStore(
        combineReducers({
            bento: bentoReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );

        return store;

}