import { PostRequest } from "../../../../plugins/https";
import { setSignup } from "./action";
import { SET_SIGNUP } from "./actionTypes";

const initialState = {
    data: "",
};

export const getSignup = async(dispatch) => {
    try {
        const res = await PostRequest("/auth/signup");
        dispatch(setSignup(res.data));
    } catch (error) {
        console.error("Error signup:", error);
    }
};
export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGNUP:
            return {
                ...state,
                data: action.payload,
            };

        default:
            return state;
    }
};