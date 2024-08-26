// src/redux/favoriteReducer.js
import { addFav, deleteFav, setFav } from "./action";
import { SET_FAV, ADD_FAV, DELETE_FAV } from "./actionType";
import { DeleteRequest, GetRequest, PostRequest } from "../../../plugins/https";

export const getFavorites = () => async(dispatch) => {
    try {
        const res = await GetRequest("/favorite");
        dispatch(setFav(res.data));
    } catch (error) {
        console.error("Error fetching favorites:", error);
    }
};

export const createFavorite = async(dispatch, item) => {
    try {
        const res = await PostRequest("/favorites", item);
        dispatch(addFav(res.data));
    } catch (error) {
        console.error("Error adding favorite:", error);
    }
};

export const removeFavorite = async(dispatch, id) => {
    try {
        await DeleteRequest(`/favorite/${id}`);
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
                items: state.favorites.filter((item) => item.id !== action.payload),
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