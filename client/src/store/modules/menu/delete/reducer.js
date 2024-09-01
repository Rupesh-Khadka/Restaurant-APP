import { DeleteRequest } from "../../../../plugins/https";
import { setDelete } from "./action";
import { SET_DELETE } from "./actionType";

export const getMenu = async(dispatch) => {
    try {
        const res = await DeleteRequest("/menu/${id}");
        dispatch(setDelete(res.data));
    } catch (error) {
        console.error("Error getting categories:", error);
    }
};

const initialState = { id: [] };

export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DELETE:
            return {
                ...state,
                id: action.payload,
            };
        default:
            return state;
    }
};