import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { accountReducer, itemReducer, mapReducer } from '../reducers';

let store;

export default {

  configure: (initialState) => {
    const reducers = combineReducers({
      account: accountReducer,
      item: itemReducer,
      map: mapReducer,
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

