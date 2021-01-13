

export const loading = () => {
    return {
        type: 'LOADING'
    }
}

export const ageUpAsnc = (val) => {
    return {
        type: "AGE_UP",
        value: val
    }
}
// For async this is the pattern
export const ageUp = val => { // once capture the action
    return dispatch => {    // It would return another function which will have dispatch
        dispatch(loading());
        setTimeout(() => {
            // val++ // You can chnge the action here
            dispatch(ageUpAsnc(val));
        }, 5000);
    }
}

export const ageDown = (val) => {
    return {
        type: "AGE_DOWN",
        value: val
    }
}