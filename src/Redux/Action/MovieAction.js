import { movieService } from "../../API";
import { FETCH_MOVIELIST, FETCH_MOVIE_DETAIL } from "./Type";
import { createAction } from "./Action";

// async action
export const fetchMovie = () => {
    return (dispatch) => {
        movieService
        //call API
        .fetchListMovieAPI()
        .then((rs) => {
          //dispatch leen store
          dispatch(createAction(FETCH_MOVIELIST, rs.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
}

export const fetchDetailMovie = (id) =>{
  
  return dispatch =>{
    movieService
    // call API
      .fetchMovieDetailAPI(id)
      .then((rs) => {
        //dispatch leen store        
        dispatch(createAction(FETCH_MOVIE_DETAIL, rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}