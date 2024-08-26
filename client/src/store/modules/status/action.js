import { SET_STATUS, SET_SELECTED_ORDER } from "./actionType";

export const setStatus = (orderId, newStatus) => ({
    type: SET_STATUS,
    payload: { orderId, newStatus },
});

export const setSelectedOrder = (orderId) => ({
    type: SET_SELECTED_ORDER,
    payload: orderId,
});