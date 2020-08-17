import { cinemaService } from "../../API";
import { FETCH_CINEMA, FETCH_CINEMA_DETAIL } from "./Type";
import { createAction } from "./Action";

export const fetchCinemaAction = () => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaAPI()
      .then((rs) => {
        dispatch(createAction(FETCH_CINEMA, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCinemaDetailAction = (id) => {
  return (dispatch) => {
    cinemaService
      .fetchCinemaDetailAPI(id)
      .then((rs) => {
        dispatch(createAction(FETCH_CINEMA_DETAIL, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
