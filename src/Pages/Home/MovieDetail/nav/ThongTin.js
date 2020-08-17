import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTin extends Component {
  render() {
    let { movieDetail } = this.props;
    console.log(movieDetail);

    return (
      <div className="container">
        <div className="thongTinMovie row">
          <div className="col-6">
            <p>
              <strong>Tên phim:          </strong>
                     {movieDetail.tenPhim}
            </p>
            <p>
              <strong>Ngày công chiếu:   </strong>
              {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString()}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Nội dung phim:</strong> {movieDetail.moTa}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movieDetail: state.MovieReducer.movieDetail,
});

export default connect(mapStateToProps)(ThongTin);
