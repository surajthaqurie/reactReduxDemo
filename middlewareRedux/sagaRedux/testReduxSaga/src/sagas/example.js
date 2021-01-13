import { take, /** takeEvery, */ put, call } from 'redux-saga/effects';


// function* rootSaga() {
//     console.log('Hey World');
// }

function* workerSaga() {
    console.log('Hey From Worker');
    console.log(put({ type: 'ACTION_FROM_WORKER' }));
    yield put({ type: 'ACTION_FROM_WORKER' });
}

function* byebyeSaga() {
    console.log('logoutSaga');
}

// Watcher saga ANd Controled By step by step (TOP-BOTTON) Approach: who came first 
function* rootSaga() {

    // TakeEvery : basically takes every action dispatched from my store call 'HELLO
    // yield takeEvery('LOGIN', workerSaga); // calling above function Workersaga()

    // yield takeEvery('HELLO', workerSaga);

    // Take : If action dispatched three time but only been handle once
    yield take('LOGIN');

    // Call : This helps for call to FUNCTION()
    yield call(workerSaga);

    // yield take('ADD_TO_CART');
    // yield take('BUY');
    yield take("LOGOUT");
    yield call(byebyeSaga);

}

// Watcher saga -> action - woker saga

export default rootSaga;