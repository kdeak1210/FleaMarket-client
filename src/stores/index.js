import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { itemReducer } from '../reducers';

let store;

export default {

  configure: (initialState) => {
    const reducers = combineReducers({
      item: itemReducer,
    });

    // initialState can be null
    if (initialState) {
      store = createStore(reducers, initialState, applyMiddleware(thunk));
      return store;
    }

    store = createStore(reducers, applyMiddleware(thunk));
    return store;
  },

  currentStore: () => store,
};
