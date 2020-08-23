import React, { Component, Fragment } from "react";
import FilmTime from "./FilmTime";
import { withRouter } from "react-router-dom";
import { services } from "../Services";
import FilmDate from "./FilmDate";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maCumRap: "",
      maHeThongRap: "",
      openDay: true,
      openTime: false,
      date: "",
      active: "",
    };
  }
  changePage = (maLichChieu) => {
    let { film, history } = this.props;
    services.changePage(film, maLichChieu, history);
  };
  renderFilmDateTime = (maPhim) => {
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
      return listDaySlice.map((day, index) => {
        return (
          <Fragment>
            <FilmDate day={day} film={film} key={index} />
          </Fragment>
        );
      });
    }
  };

  render() {
    let { film } = this.props;
    return (
      <div className="cinema-film">
        <div
          className="film-info"
          onClick={() => {
            this.setState({ openDay: !this.state.openDay });
          }}
        >
          <img
            src={film.hinhAnh}
            alt=""
            style={{ width: "50px", height: "50px" }}
          />
          <div className="film-detail">
            <p>
              <span className='film-name'>
                <strong>{film.tenPhim}</strong>
              </span>
              <span className="film-imdb">138 phút - TIX 7.8 - IMDb 6.9</span>
            </p>
          </div>
        </div>

        <div
          className="date-time"
          style={{ paddingRight: "10px" }}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          {this.state.openDay ? (
            <div className="date">
              {this.renderFilmDateTime(film.maPhim, film.tenPhim)}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(MovieItem);
