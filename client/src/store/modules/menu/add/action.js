import { SET_Category } from "./actionType";

export const setCategory = (category) => {
    return {
        type: SET_Category,
        payload: category,
    };
};