import { SET_CONTACT, SET_DELETE } from "./actionType";

export const setContact = (contacts) => {
    return {
        type: SET_CONTACT,
        payload: contacts,
    };
};

export const setDeleteContact = (contacts) => {
    return {
        type: SET_DELETE,
        payload: contacts,
    };
}