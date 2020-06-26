// Dependencies
import React from "react";

// Assets
import "./review.scss";

export default function Review(props) {
  return (
    <div className="review">
      <div className="review--pic">
        <img alt="reviewImg" className="review--pic--img" src={props.image} />
      </div>
      <p className="review--paragraph">
        {props.paragraph.length > 150
          ? props.paragraph.substring(0, 150) + " ..."
          : props.paragraph}
      </p>
      <div className="review--footer">
        <h1 className="review--footer--name">{props.name}</h1>
        <p className="review--footer--place">{props.place}</p>
      </div>
    </div>
  );
}
