import React from "react";
import { Videomodal } from "../Components";

const ShowcaseVideos = ({ thumb }) => {
  return (
    <div className="showcase--videos">
      <div className="front">
        <img src={thumb} alt="" />
      </div>
      <div className="back">
        <div>
          <small>March 19, 1980</small>
          <h1>My Cadet college album</h1>
          <p>There is my cadet college life photos</p>
        </div>
        <Videomodal />
      </div>
    </div>
  );
};

export default ShowcaseVideos;
