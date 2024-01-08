import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <h1 className="card-title">{props.name}</h1>
        <p className="card-cost">{props.cost}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </>
  );
};

export default Card;
