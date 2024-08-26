// reducer.js
import { SET_STATUS, SET_SELECTED_ORDER } from "./actionType";

const initialState = {
    orders: [
        { id: 1, customer: "John Doe", total: "$50", status: "Pending" },
        { id: 2, customer: "Jane Smith", total: "$75", status: "Pending" },
    ],
    selectedOrderId: null,
};


export const statusReducer = (state = initialState, action) => {
    console.log('Reducer received action:', action);
    switch (action.type) {
        case SET_STATUS:
            return {
                ...state,
                orders: state.orders.map((order) =>
                    order.id === action.payload.orderId ? {...order, status: action.payload.newStatus } : order
                ),
            };

        case SET_SELECTED_ORDER:
            return {
                ...state,
                selectedOrderId: action.payload,
            };

        default:
            return state;
    }
};