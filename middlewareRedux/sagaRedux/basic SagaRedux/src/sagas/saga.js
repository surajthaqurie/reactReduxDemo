
import { takeLatest, put, takeEvery, delay } from 'redux-saga/effects';


function* ageUpAsync() {
    yield delay(4000);
    yield put({ type: 'AGE_UP_ASYNC', value: 1 }); // Put is similar dispatch action
}

// Generator function - goes for one by one
export function* watchAgeUp() {
    // It meets to observe this action (Yield is for Generator Function)
    // yield takeEvery('AGE_UP', ageUpAsync) //observe every action which name is "AGE_UP"
    yield takeLatest('AGE_UP', ageUpAsync) //observe latest action which name is "AGE_UP"

}