import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { connect } from "react-redux";
import { fetchDetailMovie } from "../../../Redux/Action/MovieAction";
import ComboBoxRap from "./ComboBoxRap";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";

class ComboBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      tenRap: "",
      activeButton: true,
      maLichChieu: "",
    };
  }
  
  changePage = () => {
    let { listMovie,history} = this.props;
    if (listMovie) {
      if (JSON.parse(localStorage.getItem("credentials"))) {
        this.props.history.push(`/booking/${this.state.maLichChieu}`);
      } else {
        {
          Swal.fire('Bạn phải đăng nhập để có thể mua vé !!!','', "error").then(()=>{
            this.props.history.push(`/signin`);
          })
        }
      }
    }
  };
  activeButton = (value) => {
    this.setState({
      activeButton: value,
    });
  };
  getMaLichChieu = (maLichChieu) => {
    this.setState({ maLichChieu }, () => {
    localStorage.setItem('maLichChieu', JSON.stringify(maLichChieu))
      
    });
  };
  render() {
    let { listMovie } = this.props;
    return (
      <div className="comboBox">
        <div className="comboBox-phim comboBox-item ">
          <Autocomplete
            onChange={(e, movie) => {
              this.setState(
                {
                  ...this.state,
                  movie,
                  tenRap: "",
                },

                () => {
                  this.activeButton(true);
                  this.getMovieDetail();
                }
              );
            }}
            id="combo-box-demo"
            options={listMovie}
            getOptionLabel={(option) => option.tenPhim}
            disableClearable
            renderInput={(params) => (
              <TextField {...params} label="Phim" variant="outlined" />
            )}
          />
        </div>
        <ComboBoxRap
          activeButton={this.activeButton}
          movie={this.state.movie}
          getMaLichChieu={this.getMaLichChieu}
        />
        <button
          onClick={this.changePage}
          className={this.state.activeButton ? "button " : "button active"}
          disabled={this.state.activeButton}
        >
          MUA VÉ NGAY
        </button>
      </div>
    );
  }

  // phải movieDetail tại đây để sang bên rạp là có movieDetail trên store để lấy về và render mấy cái cần thiết
  getMovieDetail = () => {
    if (this.state.movie) {
      this.props.dispatch(fetchDetailMovie(this.state.movie.maPhim));
    }
  };
}
const mapStateToProps = (state) => ({
  listMovie: state.MovieReducer.listMovie,
});

export default connect(mapStateToProps)(withRouter(ComboBox));
