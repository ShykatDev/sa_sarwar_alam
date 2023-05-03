import React from "react";
import { urlFor } from "../client";

const SingleNews = ({ singleNews }) => {
  return (
    <div className="singleNews">
      {singleNews ? (
        <div className="container single--news">
          <span>Publish date: {singleNews.dop}</span>
          <img src={urlFor(singleNews.mainimg)} alt="" />
          <i>Source: {singleNews.source}</i>
          <h1>{singleNews.headline}</h1>
          <hr />
          <h2>
            What article says <span>:</span>
          </h2>
          <p>{singleNews.description}</p>
          <hr />

          <span style={{ marginTop: "2rem" }}>Related Photos:</span>
          <div className="img-galary">
            <img src={urlFor(singleNews.images[0])} alt="" />

            {singleNews.images[1] && (
              <img src={urlFor(singleNews.images[1])} alt="" />
            )}
            {singleNews.images[2] && (
              <img src={urlFor(singleNews.images[2])} alt="" />
            )}
          </div>

          {/* <span style={{ marginTop: "2rem" }}>Related Videos:</span> */}
          {/* <div className="vid-galary">
            {singleNews.videos.data ? (
              singleNews.videos.data.map((vids) => (
                <img
                  src={vids}
                ></img>
              ))
            ) : (
              <h4>No videos found.</h4>
            )}
          </div> */}
        </div>
      ) : (
        <div className="container">
          <h2>Opps! No news item selected.</h2>
        </div>
      )}
    </div>
  );
};

export default SingleNews;
