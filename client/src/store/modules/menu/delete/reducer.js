import { DeleteRequest } from "../../../../plugins/https";
import { setDelete } from "./action";
import { SET_DELETE } from "./actionType";

export const getCategory = async(dispatch) => {
    try {
        const res = await DeleteRequest("/menu");
        dispatch(setDelete(res.data));
    } catch (error) {
        console.error("Error getting categories:", error);
    }
};

const initialState = { item: [] };

export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DELETE:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};