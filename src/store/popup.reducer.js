import { GET_USERS_SUCCESS, GET_POPUP_SINGLE_SUCCESS, UPDATE_POPUP_SINGLE_PENDING, UPDATE_POPUP_SINGLE_SUCCESS } from "./popup.action";

export const increaseCount = () => ({
    type: 'INCREASE_COUNT'
});

const popupReducer = (state = { count: 0, users: [], popup: {}, updateSuccess: 0, updatePending: false }, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case GET_USERS_SUCCESS:
            return {
                ...state, users: action.users
            }
        case GET_POPUP_SINGLE_SUCCESS:
            return {
                ...state, popup: action.popup
            }
        case UPDATE_POPUP_SINGLE_PENDING:
            return {
                ...state, updatePending: true
            }
        case UPDATE_POPUP_SINGLE_SUCCESS:
            return {
                ...state, updateSuccess: 1, updatePending: false
            }
        default:
            return state;
    }
};

export default popupReducer;