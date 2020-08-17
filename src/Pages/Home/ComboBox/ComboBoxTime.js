import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";

class ComboBoxTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
    };
  }
  vuiLongChon = () => {
    let { movieDetail } = this.props;
    if (!movieDetail) {
      return "Vui lòng chọn phim, rạp chiếu và ngày chiếu";
    }
    if (movieDetail) {
      return "Vui lòng chọn rạp chiếu và ngày chiếu";
    }
  };
  changeActiveButton = () => {
    if (this.state.time !== []) {
      this.props.activeButton(false);
    }
  };
  getMaLichChieu = () => {
    let { movieDetail, tenRap, date } = this.props;
    let rap = "";
    if (movieDetail && tenRap && date && this.state.time !== []) {
      rap = movieDetail.lichChieu.find((item) => {
        return (
          item.thongTinRap.tenCumRap === tenRap &&
          new Date(item.ngayChieuGioChieu).toLocaleDateString() === date &&
          new Date(item.ngayChieuGioChieu).toLocaleTimeString() ===
            this.state.time
        );
      });
    }

    return rap.maLichChieu;
  };
  comboBoxTime = () => {
    let { movieDetail, tenRap } = this.props;

    let time = [];
    if (movieDetail && tenRap.length > 1) {
      let timeArr = movieDetail.lichChieu.map((item) => {
        if (item.thongTinRap.tenCumRap === this.props.tenRap) {
          if (
            new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
            this.props.date
          ) {
            return new Date(item.ngayChieuGioChieu).toLocaleTimeString();
          }
        }
      });
      time = timeArr.filter((item) => item);
    }

    return (
      <div className="comboBox-item">
        <Autocomplete
          id="combo-box-demo"
          value={this.state.time}
          onChange={(e, newValue) => {
            this.changeActiveButton();
            this.setState({ ...this.state, time: newValue }, () => {
              this.props.getMaLichChieu(this.getMaLichChieu());
            });
          }}
          disableClearable
          options={time.length > 1 ? time : [`${this.vuiLongChon()}`]}
          renderInput={(params) => (
            <TextField {...params} label="Suất Chiếu" variant="outlined" />
          )}
        />
      </div>
    );
  };
  render() {
    return <Fragment>{this.comboBoxTime()}</Fragment>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.date) {
      this.setState({
        time: [],
      });
    }
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.MovieReducer.movieDetail,
});

export default connect(mapStateToProps)(ComboBoxTime);
