import React from "react";
import { urlFor } from "../client";
import Videomodal from "./Videomodal";

const Seminar = ({ singleExpo }) => {
  console.log(singleExpo);
  return (
    <>
      {singleExpo ? (
        <div className="seminar">
          <div className="marginTop"></div>
          <div className="header">
            <h1>My Talks</h1>
            <p>{singleExpo.subheading}</p>
          </div>
          <div className="container">
            <p>{singleExpo.description}</p>
            <h2>
              Related Photos <span>:</span>
            </h2>
            <div className="img-gal">
              {singleExpo.images[0] && (
                <img
                  className="img-gal-item"
                  src={urlFor(singleExpo.images[0])}
                  alt=""
                ></img>
              )}

              {singleExpo.images[1] && (
                <img
                  className="img-gal-item"
                  src={urlFor(singleExpo.images[1])}
                  alt=""
                ></img>
              )}
              {singleExpo.images[2] && (
                <img
                  className="img-gal-item"
                  src={urlFor(singleExpo.images[2])}
                  alt=""
                ></img>
              )}
            </div>

            <div className="vid-gal">
              <Videomodal vid={singleExpo.url} />
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <h2>Sorry, no item selected!</h2>
        </div>
      )}
    </>
  );
};

export default Seminar;
