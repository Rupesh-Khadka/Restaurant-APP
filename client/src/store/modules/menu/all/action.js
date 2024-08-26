import { SET_ALLMENU } from "./actionType";

export const setAllmenu = (all) => {
    return {
        type: SET_ALLMENU,
        payload: all,
    };
};