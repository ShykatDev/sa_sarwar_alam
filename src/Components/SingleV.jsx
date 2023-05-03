import React from "react";
import Videomodal from "./Videomodal";
import { urlFor } from "../client";

const SingleV = ({ item }) => {
  console.log(item);
  return (
    <div className="single-V">
      <div className="video-sec">
        <div className="overlay"></div>
        <img src={urlFor(item.thumb)} alt="" />
        <Videomodal vid={item.url} />
      </div>
      <div className="description">
        <p>{item.desc ? item.desc : ""}</p>
        <small>{item.dop ? item.dop : ""}</small>
      </div>
    </div>
  );
};

export default SingleV;
