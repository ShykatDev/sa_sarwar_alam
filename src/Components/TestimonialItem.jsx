import React from "react";
import { urlFor } from "../client";

const TestimonialItem = ({ item }) => {
  return (
    <div className="testimonal--item">
      <p>{item.feedback}</p>
      <h2>
        <span>{item.name}</span>
      </h2>
      <div className="client">
        <img src={urlFor(item.img)} alt="salmanfrahman" />
        <div className="client--det">
          <h3>{item.company}</h3>
          <small>{item.position}</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
