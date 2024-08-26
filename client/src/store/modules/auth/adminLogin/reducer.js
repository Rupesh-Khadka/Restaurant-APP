import { SET_TOKEN } from "./actionTypes";

const initialState = {
    token: "",
};


export const authAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };

        default:
            return state;
    }
};