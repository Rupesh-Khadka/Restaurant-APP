import { SET_CONTACT } from "./actionType";

export const setContact = (contact) => {
    return {
        type: SET_CONTACT,
        payload: contact,
    };
};