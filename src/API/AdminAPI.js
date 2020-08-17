import Axios from "axios";

class AdminService {

  // <-----------USER---------->
  fetchListUserAPI() {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP04",
    });
  }

  fetchUserEditAPI(data, accessToken) {
    return Axios({
      method: "PUT",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  fetchDeleteUserAPI(taiKhoan, accessToken) {
    return Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      // data: taiKhoan,

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
  editUserAPI = (user, accessToken) => {
    return Axios({
      method: "PUT",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  };
  addUserAPI = (user, accessToken) => {
    return Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      data: user,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  };



  // <-----------MOVIE---------->

  editMovieAPI = (movie, accessToken) => {
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };
  addMovieAPI =(movie, accessToken) => {
    return Axios({
      method: "POST",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      data: movie,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
  deleteMovieAPI(maPhim, accessToken) {
    return Axios({
      method: "DELETE",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      // data: maPhim,

      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  
}

export default AdminService;
