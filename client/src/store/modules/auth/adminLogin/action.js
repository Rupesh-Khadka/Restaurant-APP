import { SET_TOKEN } from "./actionTypes";

export const setAdminToken = (data) => {
    return {
        type: SET_TOKEN,
        payload: data,
    };
};