import { SET_CONTACT } from "./actionType";

export const setContact = (contacts) => {
    return {
        type: SET_CONTACT,
        payload: contacts,
    };
};