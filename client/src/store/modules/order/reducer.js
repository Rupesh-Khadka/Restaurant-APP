import { GetRequest, PostRequest, PutRequest } from "../../../plugins/https";
import { fetchOrder, setMenuId, setOrder, updatedOrderStatus, userOrder } from "./action";
import {
    GET_ORDER,
    GET_USERORDER,
    MENU_ID,
    SET_ORDER,
    UPDATE_ORDER_STATUS,
} from "./actionType";

export const getOrder = async(dispatch) => {
    try {
        const res = await GetRequest("/orders");
        dispatch(fetchOrder(res.data));
    } catch (error) {
        console.error("Error getting Orders:", error);
    }
};

export const getUserOrder = async(dispatch) => {
    try {
        const res = await GetRequest("/orders/user");
        dispatch(userOrder(res.data));
    } catch (error) {
        console.error("Error getting Orders:", error);
    }
};

export const updateOrderStatus = async(dispatch, updatedOrder) => {
    const id = updatedOrder._id;
    try {
        const res = await PutRequest(`/orders/${id}`, {
            status: updatedOrder.status,
        });
        dispatch(updatedOrderStatus(res.data));
    } catch (error) {
        console.error("Error updating order status:", error);
    }
};

export const getMenuId = async(dispatch, id) => {
    try {
        dispatch(setMenuId(id));
    } catch (error) {
        console.error("Error adding favorite");
    }
};

export const createOrder = async(dispatch, items, customer) => {
    const payload = {
        items: items.map((item) => ({
            // Store the quantity and item in items an array
            item: item._id,
            quantity: item.quantity,
        })),
        customer: {
            // Store the customer propeties in an array
            name: customer.name,
            email: customer.email,
            number: customer.number,
            address: customer.address,
        },
    };
    try {
        const res = await PostRequest("/orders", payload);
        dispatch(setOrder(res.data));
    } catch (error) {
        console.error("Error in creating Order:", error);
    }
};

const initialState = {
    order: [],
    menuId: [],
    selectedOrderId: null,
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case MENU_ID:
            return {
                ...state,
                menuId: [...state.menuId, action.payload],
            };
        case SET_ORDER:
            return {
                ...state,
                order: [...state.order, action.payload],
            };

        case GET_ORDER:
            return {
                ...state,
                order: action.payload || [],
            };

        case GET_USERORDER:
            return {
                ...state,
                order: action.payload || [],
            };

        case UPDATE_ORDER_STATUS:
            return {
                ...state,
                order: state.order.map((ord) =>
                    ord._id === action.payload._id ? action.payload : ord
                ),
            };

        default:
            return state;
    }
};