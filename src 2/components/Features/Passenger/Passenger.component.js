import React from "react";

import AddIcon from "@material-ui/icons/Add";
import passenger from "assets/img/passenger.svg";

const Passenger = () => {
  return (
    <div className="driver">
      <div className="header">
        <img src={passenger} alt="" />
      </div>

      <div className="driver-content">
        <div className="row-item">
          <AddIcon />
          <div className="row-text">
            <h1 className="row-title">Title 1</h1>
            <p className="row-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="row-item">
          <AddIcon />
          <div className="row-text">
            <h1 className="row-title">Title 1</h1>
            <p className="row-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="row-item">
          <AddIcon />
          <div className="row-text">
            <h1 className="row-title">Title 1</h1>
            <p className="row-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="row-item">
          <AddIcon />
          <div className="row-text">
            <h1 className="row-title">Title 1</h1>
            <p className="row-subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
          </div>
        </div>
        <div className="viewAll"> View All</div>
      </div>
    </div>
  );
};

export default Passenger;
