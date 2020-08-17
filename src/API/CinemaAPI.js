import Axios from "axios";

class CinemaService {
  fetchCinemaAPI = () => {
    return Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
    });
  };

  fetchCinemaDetailAPI = (id) => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP06
      `,
    });
  };
}
export default CinemaService;
