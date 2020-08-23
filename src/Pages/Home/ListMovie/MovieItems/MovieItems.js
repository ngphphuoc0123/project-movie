import React, { Component, Fragment } from "react";
import img from "../../../../img/play-video.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class MovieItems extends Component {
  render() {
    let { item, trailer } = this.props;
    return (
      <div className="film-item">
        <div className="film-img">
          <div className="film-rate">
            <div className="film-point">
              <span>{item.danhGia}</span>
            </div>
            <div className="star">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
            </div>
          </div>
          <img className="card-img-top" src={item.hinhAnh} alt="" />
          <div className="filmOverlay">
            <a
              data-toggle="modal"
              data-target="#Trailer"
              onClick={() => {
                trailer(item.trailer);
              }}
            >
              <img src={img} alt="" />
            </a>

            <Link to={`/detail/${item.maPhim}`} className="btn buttonOverlays">
              CHI TIẾT
            </Link>
          </div>
        </div>
        <div className="film-body">
          <h4 className="card-title">{item.tenPhim}</h4>
          <p className="card-text">{item.thoiLuong}</p>
        </div>
      </div>
    );
  }
}

export default connect(null)(MovieItems);
