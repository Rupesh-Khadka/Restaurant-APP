import { GetRequest } from "../../../plugins/https";
import { setContact } from "./action";
import { SET_CONTACT } from "./actionType";

export const getContact = async(dispatch) => {
    try {
        const res = await GetRequest("/contact");
        dispatch(setContact(res.data));
    } catch (error) {
        console.error("Error getting contact:", error);
    }
};

const initialState = { contact: [] };

export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT:
            return {
                ...state,
                contact: action.payload,
            };
        default:
            return state;
    }
};