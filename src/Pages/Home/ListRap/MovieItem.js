import React, { Component, Fragment } from "react";
import FilmTime from "./FilmTime";
import { withRouter } from "react-router-dom";
import { services } from "../Services";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maCumRap: "",
      maHeThongRap: "",
      date: "",
      activeDay: "",
      isOpen: false,
    };
  }
  changePage = (maLichChieu) => {
    let { film, history } = this.props;
    services.changePage(film, maLichChieu, history);
  };
  renderDateSlice = (maPhim) => {
    let film = this.props
      .checkMaCumRap()
      .danhSachPhim.find((phim) => maPhim === phim.maPhim);
    // lấy ra danh sách ngày chiếu (có trùng ngày do 1 ngày nhiều suất chiếu)
    if (film.lstLichChieuTheoPhim) {
      let listDay = film.lstLichChieuTheoPhim.map((item) => {
        return new Date(item.ngayChieuGioChieu).toLocaleDateString();
      });

      // Lọc ra danh sách ngày duy nhất (lọc bỏ ngày trùng)
      let listDaySort = [...new Set(listDay)];

      // lọc ra giữ lại 2 ngày đầu tiên
      let listDaySlice = listDaySort.slice(0, 2);
      return listDaySlice;
    }
  };
  renderFilmDateTime = (maPhim) => {
    return this.renderDateSlice(maPhim).map((day, index) => {
      return (
        <Fragment>
          <div
            key={index}
            className={
              index === this.state.activeDay ? "active date-item" : "date-item"
            }
            style={{ padding: "10px" }}
            onClick={() => {
              this.setState({ activeDay: index, date: day });
            }}
          >
            <p>{day}</p>
          </div>
        </Fragment>
      );
    });
  };
  renderFilmTime = (maPhim) => {
    // sort ra lịch chiếu của từng phim
    let film = this.props
      .checkMaCumRap()
      .danhSachPhim.find((phim) => maPhim === phim.maPhim);

    // lọc ra suất chiếu theo ngkày
    let xuatChieu = film.lstLichChieuTheoPhim.filter((item) => {
      return (
        new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
        this.state.date
      );
    });

    // trả về suất chiếu theo ngày
    return xuatChieu.map((item) => {
      let time = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
      time = time.slice(0, 5);
      return (
        <FilmTime
          time={time}
          maLichChieu={item.maLichChieu}
          changePage={this.changePage}
        />
      );
    });
  };
  render() {
    let { film, history } = this.props;
    return (
      <div className="cinema-film">
        <div className="film-info">
          <img
            src={film.hinhAnh}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <div className="film-detail">
            <p>
              <span>
                <strong>{film.tenPhim}</strong>
              </span>
              <span className="film-imdb">138 phút - TIX 7.8 - IMDb 6.9</span>
            </p>
          </div>
        </div>

        <div
          className="date-time"
          style={{ paddingright: "10px" }}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          <div className="date">
            {this.renderFilmDateTime(film.maPhim, film.tenPhim)}
          </div>
          {this.state.isOpen ? (
            <div className="time">{this.renderFilmTime(film.maPhim)}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
