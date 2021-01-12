import React, { useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";

const dumbArray = [
  {
    title: "Title 1",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Title 2",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Title 3",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Title 4",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Title 5",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
  {
    title: "Title 6",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  },
];
const ShowFeature = (props) => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    !props.viewAll
      ? setFeature([...dumbArray.slice(0, 4)])
      : setFeature([...dumbArray]);
  }, [props.viewAll]);

  return feature.map((item, key) => {
    return (
      <div className="row-item" key={key}>
        <AddIcon style={{ color: `${props.color}` }} />
        <div className="row-text">
          <h1 className="row-title">{item.title}</h1>
          <p className="row-subtitle">{item.subtitle}</p>
        </div>
      </div>
    );
  });
};
export default ShowFeature;
