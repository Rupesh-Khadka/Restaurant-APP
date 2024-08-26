import { GetRequest } from "../../../plugins/https";
import { setCategory } from "./action";
import { SET_Category } from "./actionType";

export const getCategory = async(dispatch) => {
    try {
        const res = await GetRequest("/category");
        dispatch(setCategory(res.data));
    } catch (error) {
        console.error("Error getting categories:", error);
    }
};

const initialState = { category: [] };

export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_Category:
            return {
                ...state,
                category: action.payload,
            };
        default:
            return state;
    }
};