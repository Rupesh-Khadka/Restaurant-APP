import { GetRequest, PostRequest } from "../../../plugins/https";
import { setMenuId, setOrder } from "./action";
import { MENU_ID, SET_ORDER } from "./actionType";

// export const getOrder = async(dispatch) => {
//     try {
//         const res = await GetRequest("/order");
//         dispatch(getOrder(res.data));
//     } catch (error) {
//         console.error("Error getting Orders:", error);
//     }
// };

export const getMenuId = async(dispatch, id) => {
    try {
        dispatch(setMenuId(id));
    } catch (error) {
        console.error("Error adding favorite");
    }
};

export const createOrder = async(dispatch, items, customer) => {
    const payload = {
        items: items.map(item => ({ // Store the quantity and item in items an array
            item: item._id,
            quantity: item.quantity,
        })),
        customer: { // Store the customer propeties in an array
            name: customer.name,
            email: customer.email,
            number: customer.number,
            address: customer.address,
        },
    }
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
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER:
            return {
                ...state,
                order: [...state.order, action.payload],
            };
        case MENU_ID:
            return {
                ...state,
                menuId: [...state.menuId, action.payload],
            };
        default:
            return state;
    }
};