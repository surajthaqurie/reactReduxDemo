import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Provide would allows us to inject the global store
import { Provider } from 'react-redux';

// Allows us to create store
import { createStore } from 'redux';

import reducer from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);