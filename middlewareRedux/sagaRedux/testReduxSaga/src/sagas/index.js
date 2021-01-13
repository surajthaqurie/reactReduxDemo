import { all } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
import statsSaga from './statsSaga';

export default function* rootSaga() {
    yield all([
        imagesSaga(),
        statsSaga(),
    ])
}

/*
import { takeEvery } from 'redux-saga/effects';

import { IMAGES } from '../constants/index';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');

}

// takeEvery: unblocking effect, Take: blocking effect
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;
*/
