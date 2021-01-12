import React, { useState } from "react";
import ShowFeature from "../ShowFeature.component";
import { imgFeatures } from "../Features.component";

const ItemComponent = (props) => {
  const [viewAll, setViewAll] = useState(false);

  const handleOnClick = (boolean) => {
    setViewAll(boolean);
  };

  return (
    <div className="driver">
      {imgFeatures(props.features)}
      <div className="driver-content">
        <ShowFeature viewAll={viewAll} color={props.color} />
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

export default ItemComponent;
