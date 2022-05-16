import { GET_USERS_SUCCESS } from "./popup.action";

export const increaseCount = () => ({
    type: 'INCREASE_COUNT'
});

const popupReducer = (state = { count: 0, users: [] }, action) => {
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
        default:
            return state;
    }
};

export default popupReducer;