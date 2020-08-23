import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCinemaDetailAction } from "../../../Redux/Action/CinemaAction";
import MovieItem from "./MovieItem";

class ListPhimCumRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maCumRap: "",
      maHeThongRap: "",
      activeDay: "",
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
        return (
          <MovieItem film={film} checkMaCumRap={this.checkMaCumRap}  />
        );
      });
    }
  }
  

  
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
