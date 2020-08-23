import React, { Component } from "react";

export default class FilmTime extends Component {
  render() {
    let { time, maLichChieu } = this.props;
    return (
      <div
        className="time-item"
        onClick={() => {
          this.props.changePage(maLichChieu);
        }}
      >
        <span> {time}</span>
      </div>
    );
  }
}
