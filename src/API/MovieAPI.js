import Axios from "axios";

class MovieService {
  fetchListMovieAPI() {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06",
    });
  }

  fetchMovieDetailAPI(id) {
      return Axios({
        method: "GET",
        url:
          `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      })
  }
}

export default MovieService;
