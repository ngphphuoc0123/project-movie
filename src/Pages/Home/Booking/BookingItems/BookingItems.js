import React, { Component } from "react";

class BookingItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false,
    };
  }
  handleChosen = () => {
    this.setState({
      chosen: !this.state.chosen,
    });
  };
  render() {
    let { seat } = this.props;
    return (
      <div className="seatCheckOut-item">
        <div
          className={seat.loaiGhe}
          onClick={() => {
            this.props.handleBooking(seat);
          }}
        >
          <button
            disabled={seat.daDat}
            className={`${this.state.chosen ? "chosenSeat" : ""}  
            ${seat.daDat ? "seatChosen" : ""} btn item`}
            onClick={() => {
              this.handleChosen();
            }}
          >
            {seat.tenGhe}
          </button>
        </div>
      </div>
    );
  }
}
export default BookingItems;
