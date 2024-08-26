import { SET_DELETE } from "./actionType";

export const setDelete = (item) => {
    return {
        type: SET_DELETE,
        payload: item,
    };
};