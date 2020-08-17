import { adminService } from "../../API";
import { createAction } from "./Action";
import { FETCH_USER_LIST, EDIT_MOVIE, FETCH_MOVIE_EDIT } from "./Type";
import Swal from "sweetalert2";

export const actFetchListUserAPI = () => {
  return (dispatch) => {
    adminService
      .fetchListUserAPI()
      .then((rs) => {
        dispatch(createAction(FETCH_USER_LIST, rs.data));
        localStorage.setItem("listUser", JSON.stringify(rs.data));
      })
      .catch((err) => console.log(err));
  };
};

export const actEditMovie = (movie, accessToken) => {
  console.log(movie.get("tenPhim"));
  console.log(accessToken);
  return (dispatch) => {
    console.log(movie);
    adminService
      .editMovieAPI(movie, accessToken)
      .then((rs) => {
        console.log(rs);
        dispatch(createAction(FETCH_MOVIE_EDIT, rs.data));
        Swal.fire("Sửa Phim Thành Công !!", "", "success");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Sửa Phim Thất Bại !!", error.response.data, "error");
      });
  };
};
