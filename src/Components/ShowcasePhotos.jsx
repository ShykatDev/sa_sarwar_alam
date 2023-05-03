import React from "react";

const ShowcasePhotos = ({ thumb,title }) => {
  return (
    <div className="showcase--photos">
      <div className="front">
        <img src={thumb} alt="" />
      </div>
      <div className="back">
        <div>
          <h1>{title}</h1>
          <p>{title}</p>
        </div>
        <span>Click to view more button to see all my photos.</span>
      </div>
    </div>
  );
};

export default ShowcasePhotos;
