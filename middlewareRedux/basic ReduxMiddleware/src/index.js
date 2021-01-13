import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


// Example of middlerWare
const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(`Caught in the middlerware ${JSON.stringify(result)}`);
            return result;
        }
    }
}


// Here we have to use Middlerware
const store = createStore(reducer, applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

