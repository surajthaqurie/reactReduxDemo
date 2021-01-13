import { runSaga } from 'redux-saga'; // For making(Run) fake store

import { getPage, handleImagesLoad } from '../imagesSaga';
// import

// Unit Test
test('selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);

    expect(res).toBe(nextPage);
});

test('Should Load Images and Handle them in case of success', async () => {
    // Dispatched Actions
    const dispatchedAction = [];

    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedAction.push(action)
    }

    await runSaga(fakeStore, handleImagesLoad).done;

    console.log(dispatchedAction);

});


