import React from "react";

const Card = () => {
  return (
    <div className="card">
      <img
        src={require("../image/swimmer.png")}
        alt="swimmer"
        className="card--img"
      />
      <div className="card--stats content">
        <img
          src={require("../image/Star.png")}
          alt="star"
          className="card--star"
        />
        <span>5.0</span>
        <span className="gray">(6) •</span>
        <span className="gray"> USA</span>
      </div>
      <p className="content">Life lessons with Katie Zaferes</p>
      <p className="content">
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;