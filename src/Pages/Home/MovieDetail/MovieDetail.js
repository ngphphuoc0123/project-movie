import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { createAction } from "../../../Redux/Action/Action";
import { FETCH_MOVIE_DETAIL } from "../../../Redux/Action/Type";
import { fetchDetailMovie } from "../../../Redux/Action/MovieAction";
import img from "../../../img/play-video.png";
import LichChieu from "./LichChieu";
import ThongTin from "./ThongTin";
import Header from "../../Home/Header";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: this.renderTable("LichChieu"),
    };
  }
  renderTable = (nav) => {
    switch (nav) {
      case "LichChieu":
        return <LichChieu />;
        break;
      case "ThongTin":
        return <ThongTin />;
        break;

      default:
        break;
    }
  };
  getThoiLuongPhim = () => {
    let { movieDetail } = this.props;
    if (movieDetail.lichChieu) {
      let thoiLuong = movieDetail.lichChieu.map((item) => {
        return item.thoiLuong;
      });
      let sortThoiLuong = [...new Set(thoiLuong)];
      return sortThoiLuong;
    }
  };
  render() {
    let { movieDetail } = this.props;

    return (
      <Fragment>
        <Header navbar="movieDetail" />
        <div className="modal" id="TrailerDetail">
          <div className="modal-dialog">
            <div className="modal-content">
              <iframe
                width="1000"
                height="600"
                src={movieDetail.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="movie-detail1">
          <div className="movie-detail">
            <div className="movie-detail-bg">
              <div className="gradient">
                <img src={movieDetail.hinhAnh} />
                <div className="blur"></div>
              </div>
            </div>
            <div className="movie-info">
              <div className="movie-img">
                <div
                  data-toggle="modal"
                  data-target="#TrailerDetail"
                  className="movieIMG"
                >
                  <img src={movieDetail.hinhAnh} />
                  <div className="movie-img-hover">
                    <img src={img} alt="" />
                  </div>
                </div>
              </div>
              <div className="movie-text">
                <span>
                  Ngày khởi chiếu:{" "}
                  {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()}
                </span>
                <p>
                  <strong>{movieDetail.tenPhim}</strong>
                </p>
                <span>
                  {this.getThoiLuongPhim()} phút - {movieDetail.danhGia} IMDb -
                  2D/Digital{" "}
                </span>
                <br />
                <button className="btn btn-danger">
                  <a href="#muave">Mua vé</a>
                </button>
              </div>
              <div className="movie-rate">
                <div className="circle-percent">
                  <span>7.4</span>
                </div>
                <div className="star">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
              </div>
            </div>
            <div className="movie-nav">
              <div className="container">
                <div className="movie-navbar" id="muave">
                  <ul>
                    <li>
                      <a
                        onClick={() => {
                          this.setState({
                            table: this.renderTable("LichChieu"),
                          });
                        }}
                      >
                        Lịch Chiếu
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          this.setState({
                            table: this.renderTable("ThongTin"),
                          });
                        }}
                      >
                        Thông tin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {this.state.table}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  componentWillUnmount() {
    this.props.resetMovieDetail();
  }

  componentDidMount() {
    this.props.dispatch(fetchDetailMovie(this.props.match?.params.movieId));
  }
}

const mapStateToProps = (state) => ({
  movieDetail: state.MovieReducer.movieDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    resetMovieDetail: () => dispatch(createAction(FETCH_MOVIE_DETAIL, "")),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
