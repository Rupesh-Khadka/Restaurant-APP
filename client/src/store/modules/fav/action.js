import { SET_FAV, ADD_FAV, DELETE_FAV, CLEAR_FAV } from "./actionType";

export const setFav = (items) => ({
    type: SET_FAV,
    payload: items,
});

export const addFav = (item) => ({
    type: ADD_FAV,
    payload: item,
});

export const deleteFav = (id) => ({
    type: DELETE_FAV,
    payload: id,
});

export const clearFav = () => ({
    type: CLEAR_FAV,
});