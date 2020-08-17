import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCinemaAction } from "../../../../../Redux/Action/CinemaAction";
import LichChieuTheoRap from "./LichChieuTheoRap/LichChieuTheoRap";

class LichChieu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: "",
      maCumRap: "",
      activeCinema:''
    };
  }
  setStateMaHeThongRap = (maHeThongRap) => {
    this.setState({
      maHeThongRap,
    });
  };

  renderCinema = () => {
    let { cinema, movieDetail } = this.props;
    let arr = "";
    if (movieDetail.lichChieu) {
      arr = movieDetail.lichChieu.map((item) => {
        return item.thongTinRap.maHeThongRap;
      });

      //new Set là để lọc ra các phần tử trùng, chỉ còn lại những phần tử khác nhau
      let sortArr = [...new Set(arr)];
      return sortArr.map((item, index) => {
        //cinema show ra 1 danh sách rạp (CGV, lotte, blabla ) bao gồm cả hình ảnh logo
        // render ra logo theo rạp
        let logo = cinema.find((itemrap) => {
          
          return itemrap.maHeThongRap === item;
        });
        return (
          <li
            key={index}
            onClick={() => {
              this.setState({activeCinema:index})
              this.setStateMaHeThongRap(logo.maHeThongRap);
            }}
          >
            <div className={index === this.state.activeCinema ? "tab-cinema active" : "tab-cinema"}>
              <img src={logo.logo} />
              <p className="cinema-name">{logo.tenHeThongRap}</p>
            </div>
          </li>
        );
      });
    }
  };
  render() {
    return (
      <div className="container">
        <div className="table-cinema">
          <ul>{this.renderCinema()}</ul>
        </div>
        <LichChieuTheoRap
          maHeThongRap={this.state.maHeThongRap}
          maCumRap={this.state.maCumRap}
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinemaAction());
  }
}
const mapStateToProps = (state) => ({
  cinema: state.MovieReducer.cinema,
  movieDetail: state.MovieReducer.movieDetail,
})

export default connect(mapStateToProps)(LichChieu);
