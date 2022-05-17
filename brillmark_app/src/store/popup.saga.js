import { call, put, takeEvery } from "redux-saga/effects";

import { GET_USERS_FETCH, GET_USERS_SUCCESS, GET_POPUP_SINGLE, GET_POPUP_SINGLE_SUCCESS, UPDATE_POPUP_SINGLE, UPDATE_POPUP_SINGLE_PENDING, UPDATE_POPUP_SINGLE_SUCCESS } from "./popup.action";

function usersFetch() {
    // return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    return fetch('/api/popup/get').then(response => response.json());
}

const getPopup = async (_id) => {
    return await fetch('/api/popup/' + _id).then(response => response.json());
}

const updatePopup = async (_id, title, description) => {
    const rawResponse = await fetch('api/popup/update/' + _id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, description: description})
    });
    const content = await rawResponse.json();
    
    return content;
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch);
    yield put({ type: GET_USERS_SUCCESS, users });
}

function* workGetPopupSingle(action) {
    try {
        var updating = true;
        var updatingDone = false;
        yield put({ type: UPDATE_POPUP_SINGLE_PENDING, updating });
        const popup = yield call(getPopup, action.payload.popupID);
        yield put({ type: UPDATE_POPUP_SINGLE_PENDING, updatingDone });
        yield put({ type: GET_POPUP_SINGLE_SUCCESS, popup });
    } catch(error) {
        console.log(error);
    }
}

function* workUpdatePopupSingle(action) {
    try {
        const result = yield call(updatePopup, action.payload.popupID, action.payload.title, action.payload.description);
        yield put({ type: UPDATE_POPUP_SINGLE_SUCCESS, result })
    } catch (error) {
        console.log(error);
    }
}

function* popupSaga() {
    //yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield takeEvery(GET_POPUP_SINGLE, workGetPopupSingle);
    yield takeEvery(UPDATE_POPUP_SINGLE, workUpdatePopupSingle)
}

export default popupSaga;