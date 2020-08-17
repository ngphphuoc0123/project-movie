import * as type from "../Action/Type";

let initialState = {
  listMovie: [],
  movieDetail: "",
  cinema: "",
  listCinema: "",
  maLichChieu: "",
  booking:[],
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_MOVIELIST:
      state.listMovie = action.data;
      return { ...state };
    case type.FETCH_MOVIE_DETAIL:
      state.movieDetail = action.data;
      return { ...state };
    case type.FETCH_CINEMA:
      state.cinema = action.data;
      return { ...state };
    case type.FETCH_CINEMA_DETAIL:
      state.listCinema = action.data;
      return { ...state };
    case type.FETCH_MALICHCHIEU:
      state.maLichChieu = action.data;
      return { ...state };
    case type.FETCH_BOOKING:
      state.booking = action.data;
      return { ...state };

    default:
      return state;
  }
};

export default MovieReducer;
