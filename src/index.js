import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux/store';
import App from './components/App';
import './index.css';

const store = createStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
