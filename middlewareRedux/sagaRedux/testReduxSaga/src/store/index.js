
import rootReducer from '../reducers/index';
// Step1: import
import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware, compose } from 'redux';
import rootSaga from '../sagas/index';

const configureStore = () => {
    // Step2: Call the Function createSagaMiddleware()
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            // Step3:
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
            &&
            window.__REDUX_DEVTOOLS_EXTENSION__()

        ),
    );
    // Step 4
    sagaMiddleware.run(rootSaga);

    // These actions dispatched for sagas/example.js
    // // store.dispatch({ type: 'HELLO' });
    // store.dispatch({ type: 'LOGOUT' });
    // store.dispatch({ type: 'LOGIN' });
    // store.dispatch({ type: 'LOGOUT' });


    return store;
}

export default configureStore;