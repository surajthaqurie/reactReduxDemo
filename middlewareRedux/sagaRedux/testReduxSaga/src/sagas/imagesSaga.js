import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants/index';
import { fetchImages } from '../api/index';

import { setImages, setError } from '../actions/index';

// Here State is React-Dom State
export const getPage = state => state.nextPage;
// console.log(getPage);

export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        // console.log('page', page);

        const images = yield call(fetchImages, page);
        yield put(setImages(images));


    } catch (error) {
        // dispatch the error action here
        // console.log(err);
        yield put(setError(error.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}