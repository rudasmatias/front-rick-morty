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
} from "../actions/type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  copyAllcharacter: [],
  myfavCopy: [],
  pj: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    /*     case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      }; */

    case ADD_FAV:
      return {
        ...state,
        myfavCopy: payload,
        myFavorites: payload,
      };

    /*case REMOVE_FAV:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (favorite) => favorite.id !== Number(payload)
        ),
        myFavorites: state.allCharacters.filter(
          (favorite) => favorite.id !== Number(payload)
        ),
      };*/

    case ALL_FAVOURITES:
      return {
        ...state,
        myFavorites: payload,
      };

    case ADD_CHARACTER:
      if (state.allCharacters.map((pj) => pj.id).includes(payload.id)) {
        alert("Ya existe ese pj");
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          allCharacters: [...state.allCharacters, payload],
          copyAllcharacter: [...state.copyAllcharacter, payload],
        };
      }

    case DELETE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter(
          (char) => +char.id !== +payload
        ),
      };

    case GET_ALL_FAV:
      return {
        ...state,
        myFavorites: state.myfavCopy,
      };

    case GET_CHARACTER:
      return {
        ...state,
        pj: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        myfavCopy: payload,
      };

    case FILTER:
      const filtrados = state.myfavCopy.filter((pj) => pj.gender === payload);
      return {
        ...state,
        myFavorites: filtrados,
      };

    case ORDER:
      const copy = [...state.myfavCopy];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? copy.sort((a, b) => a.id - b.id)
            : copy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
