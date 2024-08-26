import { SET_EDIT } from "./actionType";

export const setEdit = (item) => {
    return {
        type: SET_EDIT,
        payload: item,
    };
};