import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCinemaDetailAction } from "../../../../../Redux/Action/CinemaAction";

class ListPhimCumRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maCumRap: "",
      maHeThongRap: "",
    };
  }
  checkMaHeThongRap = () => {
    let { listCinema } = this.props;
    let arr = "";
    if (listCinema) {
      arr = listCinema.find(
        (list) => this.props.maHeThongRap === list.maHeThongRap
      );
    }
    return arr;
  };
  checkMaCumRap = () => {
    let arrPhim = "";
    // this.checkMaHeThongRap() trả về arr
    // ban đầu arr ko tồn tại, vì chưa click gì cả nên phải check nó có tồn tại hay ko
    if (this.checkMaHeThongRap()) {
      arrPhim = this.checkMaHeThongRap().lstCumRap.find(
        (list) => list.maCumRap === this.state.maCumRap
      );
    }
    return arrPhim;
  };

  renderListPhimCumRap() {
    // this.checkMaCumRap() trả về arrPhim
    // ban đầu arrPhim ko tồn tại, vì chưa click gì cả nên phải check nó có tồn tại hay ko
    if (this.checkMaCumRap()) {
      return this.checkMaCumRap().danhSachPhim.map((film) => {
        console.log(film);
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
                  <span className="film-imdb">
                    138 phút - TIX 7.8 - IMDb 6.9
                  </span>
                </p>
              </div>
            </div>

            <div className="date-time" style={{ paddingright: "10px" }}>
              {this.renderFilmDateTime(film.maPhim)}
            </div>
          </div>
        );
      });
    }
  }
  renderDateSlice = (maPhim) => {
    let date = this.checkMaCumRap().danhSachPhim.find(
      (phim) => maPhim === phim.maPhim
    );
    // lấy ra danh sách ngày chiếu (có trùng ngày do 1 ngày nhiều suất chiếu)
    if (date.lstLichChieuTheoPhim) {
      let listDay = date.lstLichChieuTheoPhim.map((item) => {
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
    return this.renderDateSlice(maPhim).map((day) => {
      console.log(  );
      return (
        <Fragment>
          <div className="date" style={{ padding: "10px" }}>
            {day}
          </div>
          <div className="time">{this.renderFilmTime(maPhim, day)}</div>
        </Fragment>
      );
    });
  };

  renderFilmTime = (maPhim, day) => {
    // sort ra lịch chiếu của từng phim
    let time = this.checkMaCumRap().danhSachPhim.find(
      (phim) => maPhim === phim.maPhim
    );

    // lọc ra suất chiếu theo ngày
    let arrTimeDate = time.lstLichChieuTheoPhim.filter((item) => {
      return new Date(item.ngayChieuGioChieu).toLocaleDateString() === day;
    });

    // trả về suất chiếu theo ngày
    return arrTimeDate.map((item) => {
      let timeDetail = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
      timeDetail = timeDetail.slice(0, 5);
      return (
        <div className="time-item">
          <span> {timeDetail}</span>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="cinema-xuatchieu">{this.renderListPhimCumRap()}</div>
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.maCumRap) {
      this.setState({
        maCumRap: nextProps.maCumRap,
      });
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchCinemaDetailAction(this.state.maHeThongRap));
  }
}
const mapStateToProps = (state) => ({
  listCinema: state.MovieReducer.listCinema,
});
export default connect(mapStateToProps)(ListPhimCumRap);
