import { userService } from "../../API";
import { createAction } from "./Action";
import { FETCH_CREDENTIAL, FETCH_USER_EDIT } from "./Type";
import { actFetchListUserAPI } from "./AdminAction";
import Swal from "sweetalert2";

export const actCheckSignInUser = (user, history) => {
  return (dispatch) => {
    userService
      .signInAPI(user)
      .then((rs) => {
        Swal.fire("Đăng Nhập Thành Công !!", "", "success").then(() => {
          if (rs.data.maLoaiNguoiDung === "QuanTri") {
            //set credential treen store
            dispatch(createAction(FETCH_CREDENTIAL, rs.data));
            localStorage.setItem("Admin", JSON.stringify(rs.data));
            localStorage.setItem("credentials", JSON.stringify(rs.data));
            history.push("/adminUser");
          } else if (JSON.parse(localStorage.getItem("maLichChieu"))) {
            let maLichChieu = JSON.parse(localStorage.getItem("maLichChieu"));
            console.log(maLichChieu);
            dispatch(createAction(FETCH_CREDENTIAL, rs.data));
            localStorage.setItem("credentials", JSON.stringify(rs.data));
            history.push(`/booking/${maLichChieu}`);
          } else if (localStorage.getItem("Admin")) {
            dispatch(createAction(FETCH_CREDENTIAL, rs.data));
            localStorage.setItem("credentials", JSON.stringify(rs.data));
            history.push("/adminUser");
          } else {
            dispatch(createAction(FETCH_CREDENTIAL, rs.data));
            localStorage.setItem("credentials", JSON.stringify(rs.data));
            history.push("/");
          }
        });
      })
      .catch((er) => {
        Swal.fire("Đăng Nhập Thất Bại !!", er.response.data, "error");
      });
  };
};

export const actGetUserInfo = (user) => {
  return (dispatch) => {
    userService
      .getUserInfo(user)
      .then((rs) => {
        // dispatch(createAction(FETCH_USER_INFO, rs.data));
        localStorage.setItem("userInfo", JSON.stringify(rs.data));
      })
      .catch((err) => console.log(err));
  };
};

export const actGetUserEdit = (user) => {
  return (dispatch) => {
    userService
      .getUserInfo(user)
      .then((rs) => {
        dispatch(createAction(FETCH_USER_EDIT, rs.data));
        // localStorage.setItem("userInfo", JSON.stringify(rs.data));
      })
      .catch((err) => console.log(err));
  };
};
