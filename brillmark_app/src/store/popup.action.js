export const GET_USERS_FETCH = 'GET_USERS_FETCH';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export const GET_POPUP_SINGLE = 'GET_PUPUP_SINGLE';
export const GET_POPUP_SINGLE_SUCCESS = 'GET_POPUP_SINGLE_SUCCESS';
export const UPDATE_POPUP_SINGLE = 'UPDATE_POPUP_SINGLE';
export const UPDATE_POPUP_SINGLE_PENDING = 'UPDATE_POPUP_SINGLE_PENDING';
export const UPDATE_POPUP_SINGLE_SUCCESS = 'UPDATE_POPUP_SINGLE_SUCCESS';

export const getPopupByID = (_id) => ({
    type: GET_POPUP_SINGLE,
    payload: { popupID: _id }
});

export const updatePopupByID = (_id, title, description) => ({
    type: UPDATE_POPUP_SINGLE,
    payload: { popupID: _id, title: title, description: description }
});

export const getUsersFetch = () => ({
    type: GET_USERS_FETCH
});