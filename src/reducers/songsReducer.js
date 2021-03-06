import { ACTIONS } from "../constants/actions";

const initialState = {
  list: []
};

const songs = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SONGS.LIST_LOADED:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};

export default songs;
