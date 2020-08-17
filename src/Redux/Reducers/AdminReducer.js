import * as type from "../Action/Type";

export const initialState = {
  listUser: "",
  keyword: "",
  userEdit: "",
  movieEdit: "",
  listMovie: [],
};

export const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_USER_LIST:
      state.listUser = action.data;
      return { ...state };
    case type.FETCH_USER_EDIT:
      state.userEdit = action.data;
      return { ...state };
    case type.FETCH_MOVIE_LIST:
      state.listMovie = action.data;
      return { ...state };
    case type.FETCH_MOVIE_EDIT:
      state.movieEdit = action.data;

      return { ...state };
    case type.SEARCH:
      state.keyword = action.data;

      return { ...state };

    default:
      return state;
  }
};
