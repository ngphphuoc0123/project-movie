import Axios from "axios";

class BookingService {
  fetchBookingAPI = (maLichChieu) => {
    return Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    });
  };

  // API để user có thể đặt vé
  fetchBookingAdminAPI = (maLichChieu,danhSachVe,taiKhoanNguoiDung,accessToken) =>{
    return Axios({
      method: "POST",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
  }
}

export default BookingService;
