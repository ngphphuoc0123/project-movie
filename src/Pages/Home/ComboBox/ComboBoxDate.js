import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import ComboBoxTime from "./ComboBoxTime";

class ComboBoxDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [],
    };
  }
  vuiLongChon = () => {
    let { movieDetail } = this.props;

    if (!movieDetail) {
      return "Vui lòng chọn phim và rạp chiếu";
    } else {
      return "Vui lòng chọn rạp chiếu";
    }
  };
  comboBoxDate = () => {
    let { tenRap, movieDetail } = this.props;
    let date = [];
    if (movieDetail && tenRap.length > 1) {
      let dateArr = movieDetail.lichChieu.map((item) => {
        if (item.thongTinRap.tenCumRap === this.props.tenRap) {
          return new Date(item.ngayChieuGioChieu).toLocaleDateString();
        }
      });
      dateArr = dateArr.filter((item) => item);
      date = [...new Set(dateArr)];
    }
    return (
      <Fragment>
        <div className='comboBox-item'>
          <Autocomplete
            id="combo-box-demo"
            value={this.state.date}
            onChange={(e, newValue) => {
              this.setState({ date: newValue },() => {
                this.props.activeButton(true)

              });
            }}
            disableClearable
            options={date.length > 1 ? date : [`${this.vuiLongChon()}`]}
            renderInput={(params) => (
              <TextField {...params} label="Ngày Xem" variant="outlined" />
            )}
          />
        </div>
        <ComboBoxTime activeButton={this.props.activeButton} date={this.state.date} tenRap={this.props.tenRap} getMaLichChieu={this.props.getMaLichChieu} />
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.comboBoxDate()}</Fragment>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.tenRap) {
      this.setState({
        date: [],
      });
    }
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.MovieReducer.movieDetail,
});

export default connect(mapStateToProps)(ComboBoxDate);
