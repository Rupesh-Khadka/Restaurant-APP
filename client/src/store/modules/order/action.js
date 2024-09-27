import { GET_ORDER, MENU_ID, SET_ORDER, SET_SELECTED_ORDER_ID } from "./actionType";

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

export const fetchOrder = (orders) => {
    return {
        type: GET_ORDER,
        payload: orders,
    };
};

export const setSelectedOrderId = (id) => ({
    type: SET_SELECTED_ORDER_ID,
    payload: id,
});