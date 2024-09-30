import {
    GET_ORDER,
    MENU_ID,
    SET_ORDER,
    UPDATE_ORDER_STATUS,
} from "./actionType";

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

export const updatedOrderStatus = (updatedOrder) => ({
    type: UPDATE_ORDER_STATUS,
    payload: updatedOrder,
});