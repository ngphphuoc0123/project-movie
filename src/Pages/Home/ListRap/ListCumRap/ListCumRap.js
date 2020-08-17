import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchCinemaDetailAction } from "../../../../Redux/Action/CinemaAction";
import ListPhimCumRap from "./ListPhimCumRap/ListPhimCumRap";
import { services } from "../../Services"

class ListCumRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: "BHDStar",
      maCumRap: "bhd-star-cineplex-pham-hung",
    };
  }

 
  getMaCumRap = (value) => {
    this.setState({
      maCumRap: value,
    });
  };
  checkMaHeThongRap = () => {
    let { listCinema } = this.props;    
    let arr = ""; 
    if (listCinema) {
      arr = listCinema.find(
        (list) => this.state.maHeThongRap === list.maHeThongRap
      );
    }
    return arr;
  };
  renderListCinema() {
    // this.checkMaHeThongRap() trả về arr
    // ban đầu arr ko tồn tại, vì chưa click gì cả nên phải check nó có tồn tại hay ko
    if (this.checkMaHeThongRap()) {
      return this.checkMaHeThongRap().lstCumRap.map((item, index) => {
        return (
          <Fragment>
            <div
              className="cinema-detail"
              key={index}
              onClick={() => {
                this.getMaCumRap(item.maCumRap);
              }}
            >
              {services.renderLogo(this.state.maHeThongRap)}
              <div className="cinema-info">
                <div className="cinema-info-name">{item.tenCumRap}</div>
                <span className="infoCinema">{item.diaChi}</span>
              </div>
            </div>
          </Fragment>
        );
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="cinema-item">{this.renderListCinema()}</div>
        <ListPhimCumRap
          maCumRap={this.state.maCumRap}
          maHeThongRap={this.state.maHeThongRap}
        />
      </Fragment>
    );
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.maHeThongRap) {
      this.setState({
        maHeThongRap: nextProps.maHeThongRap,
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

export default connect(mapStateToProps)(ListCumRap);
