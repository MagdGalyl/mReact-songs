// OutSide Lib.
import React from 'react';
import ReactDOM from 'react-dom';
// Provider start capital because its a COMPONENT
import { Provider } from 'react-redux';
// store is a FUNCTION so its camelCased
import { createStore } from 'redux';

// Our Own Files
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
  <App />
  </Provider>,
  document.querySelector('#root')
);
