import React, { useState, useEffect } from "react";
import { globalPic, planePic, talkPic } from "../Assets";
import { Link } from "react-router-dom";
import { client, urlFor } from "../client";

const GlobalExp = ({ setSingleExpo }) => {
  const [globalExp, setGlobalExp] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "globalexp"]`).then((res) => setGlobalExp(res));
  }, []);

  return (
    <div className="globalExp" id="globalExp">
      <div class="container">
        <h1 class="section__title">
          Global Exposer<span class="has-accent-color">.</span>
        </h1>
        <p class="sub_section__title">My global journey and experience</p>

        <div class="global-grid">
          {/* Sub__Section */}

          {globalExp.map((glexp) => (
            <div class="global-item">
              <img src={urlFor(glexp.mainImg)} alt="" />
              <div class="text-content">
                <h3>
                  <u>{glexp.headline}</u>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequuntur, iure itaque incidunt vero laborum sequi quam
                  saepe quas dicta consequatur.
                </p>

                <Link
                  onClick={() => {
                    setSingleExpo(glexp);
                  }}
                  className="link--btns"
                  to="/seminars"
                >
                  more
                </Link>
              </div>
            </div>
          ))}

          {/* <div class="global-item">
            <img src={globalPic} alt="" />
            <div class="text-content">
              <h3>
                <u>My Seminars</u>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur, iure itaque incidunt vero laborum sequi quam saepe
                quas dicta consequatur.
              </p>

              <Link className="link--btns" to="/seminars">
                more
              </Link>
            </div>
          </div> */}

          {/* Sub__Section */}
          {/* <div class="global-item">

            <div class="text-content">
              <h3>
                <u>My Talks</u>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur, iure itaque incidunt vero laborum sequi quam saepe
                quas dicta consequatur.
              </p>
              <Link className="link--btns" to="/seminars">
                more
              </Link>
            </div>
            <img src={talkPic} alt="" />
          </div> */}

          {/* Sub__Section  */}
          {/* <div class="global-item">
            <img src={planePic} alt="" />
            <div class="text-content">
              <h3>
                <u>My Journey</u>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur, iure itaque incidunt vero laborum sequi quam saepe
                quas dicta consequatur.
              </p>
              <Link className="link--btns" to="/seminars">
                more
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GlobalExp;
