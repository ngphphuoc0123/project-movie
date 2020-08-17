import Axios from "axios";

class BookingService {
  fetchBookingAPI = (maLichChieu) => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    });
  };
}

export default BookingService;
