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
export const deleteContact = (id) => async(dispatch) => {
    // try {
    //     await DeleteRequest(`/contact`);
    //     dispatch(getContact(dispatch));
    // } catch (error) {
    //     console.error("Error deleting contact:", error); // Fixed error logging
    // }
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