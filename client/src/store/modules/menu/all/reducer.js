import { GetRequest } from "../../../../plugins/https";
import { setAllmenu } from "./action";
import { SET_ALLMENU } from "./actionType";

export const getMenu = async(dispatch) => {
    try {
        const res = await GetRequest("/menu");
        dispatch(setAllmenu(res.data));
    } catch (error) {
        console.error("Error getting menu:", error);
    }
};

const initialState = { all: [] };

export const menuAllReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALLMENU:
            return {
                ...state,
                all: action.payload,
            };
        default:
            return state;
    }
};