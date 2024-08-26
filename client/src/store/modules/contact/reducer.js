import { DeleteRequest, GetRequest } from "../../../plugins/https";
import { setContact, setDeleteContact } from "./action";
import { SET_CONTACT, SET_DELETE } from "./actionType";

export const getContact = async(dispatch) => {
    try {
        const res = await GetRequest("/contact");
        dispatch(setContact(res.data));
    } catch (error) {
        console.error("Error getting contact:", error);
    }
};
export const deleteContact = async(dispatch) => {
    try {
        const res = await DeleteRequest("/contact");
        dispatch(setDeleteContact(res.data));
    } catch (error) {
        console.error("Error deleting contact:", error);
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
        case SET_DELETE:
            return {
                ...state,
                contact: action.payload,
            };
        default:
            return state;
    }
};