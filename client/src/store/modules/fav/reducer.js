// src/redux/favoriteReducer.js
import { addFav, deleteFav, setFav } from "./action";
import { DeleteRequest, GetRequest, PostRequest } from "../../../plugins/https";
import { ADD_FAV, DELETE_FAV, SET_FAV } from "./actionType";

export const getFavorites = async(dispatch) => {
    try {
        const res = await GetRequest("/favourite");
        dispatch(setFav(res.data)); // Update items with fetched favorites
    } catch (error) {
        console.error("Error fetching favorites");
    }
};

export const createFavorite = async(dispatch, foodItem) => {
    try {
        const res = await PostRequest("/favourite", {
            foodItem,
        }); // "foodItem" = "id"  in backend
        dispatch(addFav(res.data));
    } catch (error) {
        console.error("Error adding favorite");
    }
};

export const removeFavorite = async(dispatch, id) => {
    try {
        await DeleteRequest(`/favourite/${id}`);
        dispatch(deleteFav(id));
    } catch (error) {
        console.error("Error removing favorite:", error);
    }
};

const initialState = {
    items: [],
};

export const favReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case DELETE_FAV:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
            };
        case SET_FAV:
            return {
                ...state,
                items: action.payload,
            };
        default:
            return state;
    }
};