import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import ComboBoxDate from "./ComboBoxDate";
import { withRouter } from "react-router-dom";

class ComboBoxRap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenRap: [],
    };
  }
  comboBoxRap = () => {
    let { movieDetail } = this.props;
    let tenCumRap = [];
    if (movieDetail) {
      let tenCumRaparr = movieDetail.lichChieu.map(
        (item) => item.thongTinRap.tenCumRap
      );
      tenCumRap = [...new Set(tenCumRaparr)];
    }
    return (
      <Fragment>
        <div className="comboBox-item">
          <Autocomplete
            id="combo-box-demo"
            value={this.state.tenRap}
            onChange={(e, newValue) => {
              this.setState({ tenRap: newValue },() => {
                this.props.activeButton(true)

              });
            }}
            disableClearable
            options={tenCumRap.length > 1 ? tenCumRap : ["Vui lòng chọn phim"]}
            renderInput={(params) => (
              <TextField {...params} label="Rạp" variant="outlined" />
            )}
          />
        </div>
        <ComboBoxDate activeButton={this.props.activeButton} tenRap={this.state.tenRap} getMaLichChieu={this.props.getMaLichChieu}/>
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.comboBoxRap()}</Fragment>;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.movie) {
      this.setState({
        tenRap: [],
      });
    }
  }
}
const mapStateToProps = (state) => ({
  movieDetail: state.MovieReducer.movieDetail,
});

export default connect(mapStateToProps)(ComboBoxRap);
