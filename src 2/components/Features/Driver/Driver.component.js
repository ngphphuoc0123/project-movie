import React, { useState } from "react";

import driver from "assets/img/driver.svg";
import ShowFeature from "../ShowFeature.component";

const Driver = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleOnClick = (boolean) => {
    setViewAll(boolean);
  };
  return (
    <div className="driver">
      <div className="header">
        <img src={driver} alt="" />
      </div>

      <div className="driver-content">
        <ShowFeature viewAll={viewAll} />
        <div
          className="viewAll"
          onClick={() => {
            handleOnClick(true);
          }}
          style={viewAll ? { display: "none" } : { display: "block" }}
        >
          View All
        </div>
        <div
          className="viewAll"
          onClick={() => {
            handleOnClick(false);
          }}
          style={!viewAll ? { display: "none" } : { display: "block" }}
        >
          View Less
        </div>
      </div>
    </div>
  );
};

export default Driver;
