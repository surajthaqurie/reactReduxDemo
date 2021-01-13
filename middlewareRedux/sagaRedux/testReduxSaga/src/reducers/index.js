import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer'
import imageReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imageReducer,
    error: errorReducer,
    nextPage: pageReducer,
    imageStats: statsReducer
});


export default rootReducer;


// Step3 : connected to the store
