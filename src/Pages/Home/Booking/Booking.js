import React, { Component, Fragment } from "react";
import img from "../../../img/screen.png";
import { connect } from "react-redux";
import { fetchBookingAction } from "../../../Redux/Action/BookingAction";
import BookingItems from "./BookingItems";
import Axios from "axios";
import Swal from "sweetalert2";
import { bookingService } from "../../../API";

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: [],
      total: 0,
      chosen: false,
    };
  }
  checkLogin = () => {
    const abc = localStorage.getItem("credentials");
    if (abc === null || !localStorage.getItem("credentials")) {
      Swal.fire("Bạn Cần Đăng Nhập Để Đặt Vé !!", "", "warning");
      this.props.history.push("/signin");
    }
  };
  renderInfoFilm = (value) => {
    let { maLichChieu } = this.props;

    if (maLichChieu) {
      const logo = () => {
        let img = "";
        if (this.props.cinema) {
          img = this.props.cinema.find(
            (rap) =>
              rap.maHeThongRap ===
              maLichChieu.thongTinPhim.tenCumRap.slice(0, 3)
          );
        }
        return (
          <div className="seatCheckOut-leftTitle">
            <div className="seatCheckOut-logo">
              <img src style={{ width: "50px" }} />
            </div>
            <div className="seatCheckOut-contentCinema">
              <p className="seatCheckOut-address">
                <strong>{maLichChieu.thongTinPhim.tenCumRap}</strong>
              </p>
              <p className="seatCheckOut-hour">
                - {maLichChieu.thongTinPhim.gioChieu} -{" "}
                {maLichChieu.thongTinPhim.tenRap}
              </p>
            </div>
          </div>
        );
      };

      const name = () => {
        return (
          <div className="row right-filmName">
            <div className="col-12 right-text">
              <div className="right-address">
                <p className="right-name">
                  <span>C18</span> {maLichChieu.thongTinPhim.tenPhim}
                </p>{" "}
                <span className="cinemaName">
                  {maLichChieu.thongTinPhim.tenCumRap}
                </span>
              </div>
              <div className="right-hour">
                Ngày {maLichChieu.thongTinPhim.ngayChieu} -{" "}
                {maLichChieu.thongTinPhim.gioChieu} -{" "}
                {maLichChieu.thongTinPhim.tenRap}
              </div>
            </div>
          </div>
        );
      };

      return <Fragment>{value ? logo() : name()}</Fragment>;
    }
  };
  showGhe = () => {
    if (this.state.booking.length > 0) {
      //string template trả về các phần từ và tự động thêm dấu phẩy (nếu mảng có nhiều hơn 2 phần tử)
      return `${this.state.booking.map((item) => item.tenGhe)}`;
    }
  };
  handleBooking = (value) => {
    let { booking } = this.state;
    let object = booking.find((item) => {
      return item.tenGhe == value.tenGhe;
    });
    //index trả về -1 nếu ko tìm thấy và trả về vị trí của index trong mảng nếu tìm thấy
    let index = booking.findIndex((item) => item === object);
    if (index !== -1) {
      booking.splice(index, 1);

      //tinh total
      let total = 0;
      let totalArr = booking.map((item) => item.giaVe);
      totalArr.map((item) => (total += item));

      this.setState({
        booking: booking,
        total,
      });
    } else {
      let bookingChosen = [...booking, value];

      // tinh total
      let total = 0;
      let totalArr = bookingChosen.map((item) => item.giaVe);
      totalArr.map((item) => (total += item));

      this.setState({
        booking: bookingChosen,
        total,
      });
    }
  };

  renderSeat = () => {
    let { maLichChieu } = this.props;
    if (maLichChieu) {
      let ghe = maLichChieu.danhSachGhe.map((item) => {
        return item;
      });
      ghe = ghe.slice(0, 96);
      return ghe.map((item, index) => {
        return (
          <Fragment>
            <BookingItems
              key={index}
              seat={item}
              handleBooking={this.handleBooking}
            />
          </Fragment>
        );
      });
    }
  };

  handleBookingToUser = () => {
    let danhSachVe = this.state.booking.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));

    let maLichChieu = this.props.history.location.pathname.slice(9, 14);
    console.log(maLichChieu);

    let user = JSON.parse(localStorage.getItem("credentials"));

    //Axio
    bookingService
      .fetchBookingAdminAPI(
        maLichChieu,
        danhSachVe,
        user.taiKhoan,
        user.accessToken
      )
      .then((rs) => {
        Swal.fire("Đặt Ghế Thành Công !!", "", "success").then(() => {
          localStorage.setItem("maLichChieu", null);
          this.props.history.push("/");
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire("Đặt Ghế Thất Bại !!", err.response.data, "error");
      });
  };
  render() {
    return (
      <div className="booking">
        <div className="header">
          <div className="header-content">
            <div className="row hideOnMobile">
              <div className="colLeft">
                <ul>
                  <li className="active">
                    <span>01 </span> CHỌN GHẾ &amp; THANH TOÁN
                  </li>
                  <li>
                    <span>02 </span> KẾT QUẢ ĐẶT VÉ
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="header-mobile navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sideMenu"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <img src="../img/align-left.png" alt="" />
            </button>
            <div
              id="sideMenu"
              className="header-sideMenu collapse navbar-collapse"
            >
              <ul className="navbar-nav">
                <li className="active">
                  <span>01 </span> CHỌN GHẾ &amp; THANH TOÁN
                </li>
                <li>
                  <span>02 </span> KẾT QUẢ ĐẶT VÉ
                </li>
              </ul>
            </div>
            <div className="header-responsivePay">
              <h6>03. THANH TOÁN</h6>
            </div>
          </div>
        </div>
        <div className="left">
          <div className="left-content">
            <div className="left-bg">
              <div className="left-overlay" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <div className="row right-total">
              <div className="col-12">
                <p className="right-cash">{this.state.total} đ</p>
              </div>
            </div>
            {this.renderInfoFilm(false)}
            <div className="row right-chair">
              <div className="col-12">
                <div className="col-8 right-left">Ghế: {this.showGhe()}</div>
                <div className="col-4 right-right">
                  <p>{this.state.total} đ</p>
                </div>
              </div>
            </div>
            <div className="row right-infoUser">
              <div className="col-12">
                <input type="text" className="content" />
                <label htmlFor="emailCheckout">E-Mail</label>
              </div>
            </div>
            <div className="row right-infoUser">
              <div className="col-12">
                <input type="text" className="content" />
                <label htmlFor="phoneCheckout">Phone</label>
              </div>
            </div>
            <div className="row right-voucher">
              <div className="col-12">
                <div className="right-left">
                  <input type="text" placeholder="Nhập tại đây..." />
                  <label htmlFor="voucherPromotion">Mã giảm giá</label>
                </div>
                <div className="right-right">
                  <div className="right-apply">Áp dụng</div>
                </div>
              </div>
            </div>
            <div className="row right-methodPay">
              <div className="col-12">
                <p className="right-titleMethodPay">Hình thức thanh toán</p>
                <p className="right-warning">
                  Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${
              this.state.booking.length > 0 ? "datVe" : "datVe-non"
            } `}
            onClick={() => {
              if (this.state.booking.length > 0) {
                Swal.fire({
                  title: "Bạn Chắc Chắn Đặt Ghế Chứ?",
                  text: "Bạn không thể hủy ghế nếu đã thanh toán thành công !!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Đặt!",
                  cancelButtonText: "Hủy",
                }).then((result) => {
                  if (result.value) {
                    this.handleBookingToUser()
                  }
                });
              } else {
                Swal.fire(
                  "Mời Bạn Chọn Ghế !!",
                  "Bạn không thể đặt vé khi chưa chọn ghế !!",
                  "warning"
                );
              }
            }}
          >
            Đặt Vé
          </div>
        </div>
        <div className="seatCheckOut">
          <div className="seatCheckOut-content">
            <div className="seatCheckOut-header">
              {this.renderInfoFilm(true)}
              <div className="seatCheckOut-rightTitle">
                <p className="seatCheckOut-info1">thời gian giữ ghế</p>
                <p className="seatCheckOut-info2">5:00</p>
              </div>
            </div>
            <div className="clear" />
            <div className="seatCheckOut-seatMap">
              <div className="seatCheckOut-screen">
                <img src={img} alt="" />
              </div>
              <div className="listDay">
                <p className="listDay-item">A</p>
                <p className="listDay-item">B</p>
                <p className="listDay-item">C</p>
                <p className="listDay-item">D</p>
                <p className="listDay-item">E</p>
                <p className="listDay-item">F</p>
              </div>
              <div className="seatCheckOut-listSeat">{this.renderSeat()}</div>
              <div className="seatCheckOut-noteSeat">
                <div className="seatCheckOut-typeSeats">
                  <div className="seatCheckOut-colorItem ">
                    <div className="seatThuong color">
                      <div className="nameSeat ">Ghế Thường</div>
                    </div>
                  </div>
                  <div className="seatCheckOut-colorItem ">
                    <div className="seatVip color">
                      <div className="nameSeat nameSeatVip">Ghế Vip</div>
                    </div>
                  </div>
                  <div className="seatCheckOut-colorItem ">
                    <div className="seatChoose color">
                      <div className="nameSeat nameSeatChoose">
                        Ghế đang chọn
                      </div>
                    </div>
                  </div>

                  <div className="seatCheckOut-colorItem ">
                    <div className="seatCannotChoose color">
                      <div className="nameSeat nameSeatCannotChoose">
                        Ghế không thể chọn
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.checkLogin();
    this.props.dispatch(
      fetchBookingAction(this.props.match.params.maLichChieu)
    );
  }
}
const mapStateToProps = (state) => ({
  credential: state.UserReducer.credential,
  movieDetail: state.MovieReducer.movieDetail,
  cinema: state.MovieReducer.cinema,
  maLichChieu: state.MovieReducer.maLichChieu,
});

export default connect(mapStateToProps)(Booking);
