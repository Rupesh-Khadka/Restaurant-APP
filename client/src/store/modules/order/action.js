import { GET_ORDER, MENU_ID, SET_ORDER } from "./actionType";

export const setMenuId = (id) => {
    return {
        type: MENU_ID,
        payload: id,
    };
};

export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        payload: order,
    };
};

export const getOrder = (orders) => {
    return {
        type: GET_ORDER,
        payload: orders,
    };
};