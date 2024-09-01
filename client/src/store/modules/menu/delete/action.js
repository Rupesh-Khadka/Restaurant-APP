import { SET_DELETE } from "./actionType";

export const setDelete = (id) => {
    return {
        type: SET_DELETE,
        payload: id,
    };
};