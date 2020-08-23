import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCinemaDetailAction } from "../../../Redux/Action/CinemaAction";
import { services } from "../Services";
import { withRouter } from "react-router-dom";
import FilmTime from "./FilmTime";

class LichChieuTheoRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: "",
      maCumRap: "",
      date: "1/1/2019",
      time: "",
      activeDay:''
    };
  }
  setStateDate = (value) => {
    this.setState({
      date: value,
    });
  };
  changePage = (maLichChieu) => {
    let { movieDetail,history } = this.props;
    services.changePage(movieDetail,maLichChieu,history)
  };
  checkMaHeThongRap = () => {
    let { listCinema } = this.props;
    let arr = "";
    if (listCinema) {
      arr = listCinema.find(
        (list) => list.maHeThongRap === this.props.maHeThongRap
      );
    }
    return arr;
  };
  getMaCumRap = () => {
    let { movieDetail } = this.props;
    let maCumRap = "";
    let sortCumRap = "";
    if (movieDetail) {
      if (movieDetail.lichChieu) {
        let cumRap = movieDetail.lichChieu.map((item) => {
          return item.thongTinRap.maCumRap;
        });
        // sortCumRap là mã cụm rạp theo phim
        sortCumRap = [...new Set(cumRap)];
      }
    }

    //trả về maCumRap theo maHeThongRap
    if (this.checkMaHeThongRap()) {
      if (this.checkMaHeThongRap().lstCumRap) {
        let tenCumRap = this.checkMaHeThongRap().lstCumRap.map((item) => {
          return item.maCumRap;
        });

        // maCumRapOnly là mã cụm rạp (chỉ có mã cụm rạp) theo phim và theo mã hệ thống rạp
        let maCumRapOnly = tenCumRap.find((rap) => {
          return sortCumRap.find((rap1) => rap1 === rap);
        });

        // maCumRap là thông tin của mã cum rạp (của maCumRapOnly )
        maCumRap = this.checkMaHeThongRap().lstCumRap.find((item) => {
          if (item.maCumRap === maCumRapOnly) {
            return item;
          }
        });
      }
    }
    return maCumRap;
  };
  renderFilmTime = () => {
    let { movieDetail } = this.props;

    let xuatChieu = "";
    let maLichChieu = "";

    //lọc xuất chiếu theo ngày
    if (movieDetail) {
      if (movieDetail.lichChieu) {
        xuatChieu = movieDetail.lichChieu.map((item) => {
          if (item.thongTinRap.maCumRap === this.getMaCumRap().maCumRap) {
            if (
              new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
              this.state.date
            ) {
              let date = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
              date = date.slice(0, 5);
              return date;
            }
          }
        });
      }
    }

    if (xuatChieu !== "") {
      xuatChieu = xuatChieu.filter((item) => item);
        return xuatChieu.map((time, index) => {
        // lấy mã lịch chiếu để chuyển sang trang booking
        if (movieDetail) {
          if (movieDetail.lichChieu) {
            maLichChieu = movieDetail.lichChieu.map((item) => {
              if (item.thongTinRap.maCumRap === this.getMaCumRap().maCumRap) {
                if (
                  new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
                  this.state.date
                ) {
                  let gio = new Date(
                    item.ngayChieuGioChieu
                  ).toLocaleTimeString();
                  gio = gio.slice(0, 5);

                  if (gio === time) {
                    return item.maLichChieu;
                  }
                }
              }
            });
          }
        }
        maLichChieu = maLichChieu.filter((item) => item);
        return (
          <FilmTime time={time} maLichChieu={maLichChieu} index={index} changePage={this.changePage} />
        )
      });
    }
  };

  renderFilmDate = () => {
    let { movieDetail } = this.props;
    let xuatChieu = "";
    let maCumRap = this.getMaCumRap();
    if (movieDetail) {
      if (movieDetail.lichChieu) {
        xuatChieu = movieDetail.lichChieu.map((item) => {
          if (item.thongTinRap.maCumRap === maCumRap.maCumRap) {
            return new Date(item.ngayChieuGioChieu).toLocaleDateString();
          }
        });
      }
    }
    let sortXuatChieu = [...new Set(xuatChieu)];
    //remove undefined out of array
    sortXuatChieu = sortXuatChieu.filter((item) => item);

    return sortXuatChieu.map((item, index) => {
      return (
        <div
          key={index}
          className="day-date"
          onClick={() => {
            this.setState({activeDay:index})
            this.setStateDate(item);
          }}
        >
          <p className={index === this.state.activeDay ? "day active" : "day"}>{item}</p>
        </div>
      )
    })
  };

  renderCinemaDetail = () => {
    let maCumRap = this.getMaCumRap();

    return (
      <div class="table-date-content">
        <div class="table-date">
          <div class="listDay">
            <div class="wrapDay">
              <div class="dateOfWeek">{this.renderFilmDate()}</div>
            </div>
          </div>
        </div>
        <div class="table-content">
          <div class="tab-content-detail">
            <div className="tab-movie-info">
              {services.renderLogo(this.props.maHeThongRap)}
              <div className="tab-wrap-info">
                <div className="tab-movie-name">
                  <span>
                    <span style={{ color: "red" }}>{maCumRap.tenCumRap}</span>
                  </span>
                </div>
                <div className="tab-movie-add">
                  <p>{maCumRap.diaChi}</p>
                </div>
              </div>
            </div>
            {this.renderFilmTime()}
          </div>
        </div>
      </div>
    );
  };
  render() {
    return this.renderCinemaDetail();
  }
  componentDidMount = () => {
    this.props.dispatch(fetchCinemaDetailAction(this.state.maHeThongRap));
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.maHeThongRap) {
      this.setState({
        maHeThongRap: nextProps.maHeThongRap,
      });
    }
  }
}

const mapStateToProps = (state) => ({
  listCinema: state.MovieReducer.listCinema,
  movieDetail: state.MovieReducer.movieDetail,
});

export default connect(mapStateToProps)(withRouter(LichChieuTheoRap));
