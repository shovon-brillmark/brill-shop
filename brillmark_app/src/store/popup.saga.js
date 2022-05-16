import { call, put, takeEvery } from "redux-saga/effects";

import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./popup.action";

function usersFetch() {
    // return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
    return fetch('/api/popup/get').then(response => response.json());
}

function* workGetUsersFetch() {
    const users = yield call(usersFetch);
    yield put({ type: GET_USERS_SUCCESS, users });
}

function* popupSaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
}

export default popupSaga;