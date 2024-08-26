import { SET_EDIT } from "./actionType";

const initialState = { item: [] };

export const getMenu = () => async(dispatch) => {
    try {
        const res = await axios.get("/menu");
        dispatch({ type: "SET_MENU", payload: res.data });
    } catch (error) {
        console.error("Error fetching menu:", error);
    }
};

export const editReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EDIT:
            return {
                ...state,
                item: action.payload,
            };
        default:
            return state;
    }
};