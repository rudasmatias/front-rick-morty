import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  ADD_CHARACTER,
  DELETE_CHARACTER,
  GET_ALL_FAV,
  GET_CHARACTER,
  ALL_FAVOURITES,
} from "./type";

import axios from "axios";

export const addFav = (character) => {
  console.log(character);
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/fav`, character);

      if (!data.length) throw Error("No hay favoritos");

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const removeFav = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios.delete(`/fav/${id}`);

      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};
export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export const addCharacters = (id) => {
  if (id > 827) return alert("No existe pj con ese id");
  try {
    return async (dispatch) => {
      const { data } = await axios(`/character/${id}`);

      return dispatch({
        type: ADD_CHARACTER,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const deleteCharacter = (id) => {
  return { type: DELETE_CHARACTER, payload: id };
};

export const getAll = () => {
  return { type: GET_ALL_FAV };
};

export const obtenerPj = (id) => {
  try {
    return async (dispatch) => {
      const { data } = await axios(`/character/${id}`);

      return dispatch({
        type: GET_CHARACTER,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};

export const allFavourites = () => {
  try {
    return async (dispatch) => {
      const { data } = await axios(`/allCharacter`);

      return dispatch({
        type: ALL_FAVOURITES,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
