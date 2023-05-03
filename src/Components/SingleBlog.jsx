import React from "react";
import Videomodal from "./Videomodal";
import { video1, video2, video3 } from "../Assets";
import { urlFor } from "../client";

const SingleBlog = ({ singleBlog }) => {
  console.log(singleBlog.item);
  return (
    <div>
      {singleBlog ? (
        <div className="single--blog">
          <img
            className="mainImg"
            src={urlFor(singleBlog.item.blogimg)}
            alt=""
          />
          <h1>
            {singleBlog.item.title} <span>.</span>
          </h1>

          <p>{singleBlog.item.fulldesc}</p>

          <div className="image-galary">
            <img src={urlFor(singleBlog.item.otherimg1)} alt="" />
            <img src={urlFor(singleBlog.item.otherimg2)} alt="" />
            <img src={urlFor(singleBlog.item.otherimg3)} alt="" />
          </div>

          <div className="video-sec">
            <Videomodal
              vid={singleBlog.item.link ? singleBlog.item.link : ""}
            />
          </div>
        </div>
      ) : (
        <div className="container">
          <h2>Sorry, no blog selected!</h2>
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
