import { SET_SIGNUP } from "./actionTypes";

export const setSignup = (data) => {
    return {
        type: SET_SIGNUP,
        payload: data,
    };
};