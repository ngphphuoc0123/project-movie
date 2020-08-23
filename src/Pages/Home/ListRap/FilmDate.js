import React, { Component, Fragment } from "react";
import FilmTime from "./FilmTime";

export default class FilmDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      date: "",
      active: false,
    };
  }
  renderFilmTime = () => {
    let { film } = this.props;
    // lọc ra suất chiếu theo ngkày
    let xuatChieu = film.lstLichChieuTheoPhim.filter((item) => {
      return (
        new Date(item.ngayChieuGioChieu).toLocaleDateString() ===
        this.state.date
      );
    });

    // trả về suất chiếu theo ngày
    return xuatChieu.map((item) => {
      let time = new Date(item.ngayChieuGioChieu).toLocaleTimeString();
      time = time.slice(0, 5);
      return (
        <FilmTime
          time={time}
          maLichChieu={item.maLichChieu}
          changePage={this.props.changePage}
        />
      );
    });
  };
  renderFilmDateTime = () => {
    let { day } = this.props;
    return (
      <Fragment>
        <div
          className={this.state.active ? "date-item active" : "date-item"}
          onClick={() => {
            this.setState({
              active: !this.state.active,
              date: day,
              isOpen: !this.state.isOpen,
            });
          }}
          style={{ padding: "0 10px" }}
        >
          <p>{day}</p>
        </div>

        {this.state.isOpen ? <>{this.renderFilmTime()}</> : null}
      </Fragment>
    );
  };
  render() {
    return <Fragment>{this.renderFilmDateTime()}</Fragment>;
  }
}
