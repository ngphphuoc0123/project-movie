import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCinemaAction } from "../../../Redux/Action/CinemaAction";
import ListCumRap from "./ListCumRap";

class ListRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maHeThongRap: "BHDStar",
      activeRap:''
    };
  }
  getMaHeThongRap = (value) => {
    this.setState({
      maHeThongRap: value,
    });
  };
  renderLogo() {
    let { cinema } = this.props;
    if (cinema) {
      return cinema.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => {
              this.setState({activeRap:index})
              this.getMaHeThongRap(item.maHeThongRap);
            }}
          >
            <a className={index === this.state.activeRap ? "active" : ""}>
              <img src={item.logo} alt="" />
            </a>
          </li>
        );
      });
    }
  }
  render() {
    return (
      <div className="container" id="cinema">
        <div className='background'></div>
        <div className="cinemaa">
          <div className="cinema">
            <ul>{this.renderLogo()}</ul>
          </div>
          <ListCumRap maHeThongRap={this.state.maHeThongRap} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCinemaAction());
  }
}

const mapStateToProps = (state) => ({
  cinema: state.MovieReducer.cinema,
});

export default connect(mapStateToProps)(ListRap);
