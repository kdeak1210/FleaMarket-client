import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './components/routes/Home';
import store from './stores';

// Configure Redux store w/ null initialState (no SSR now)
const App = (
  <Provider store={store.configure(null)} >
    <Home />
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
