import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShowcasePhotos, ShowcaseVideos } from "../Components";
import ShowcaseNews from "../Components/ShowcaseNews";
import { photo1, photo2, video1, video2 } from "../Assets";
import { client } from "../client";

const Galary = ({ singleNews, setSingleNews }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    client.fetch(`*[_type == "printnews"]`).then((res) => setNews(res));
  }, []);

  return (
    <div id="galary">
      <div className="container galarySec">
        <div className="photos--section" id="photos">
          <div className="section-det">
            <h1>
              Photos <span>.</span>
            </h1>
            <p>My memories and moments captured here.</p>
            <button>
              <Link className="link--btn" to="/allphotos">
                View More
              </Link>
            </button>
          </div>
          <div className="content">
            <div className="p-box">
              <ShowcasePhotos thumb={photo1} title={"My childhood album"} />
            </div>
            <div className="p-box">
              <ShowcasePhotos thumb={photo2} title={"My Cadet college album"} />
            </div>
          </div>
        </div>
        <div className="videos--section" id="videos">
          <div className="content">
            <div className="p-box">
              <ShowcaseVideos thumb={video1} />
            </div>
            <div className="p-box">
              <ShowcaseVideos thumb={video2} />
            </div>
          </div>
          <div className="section-det">
            <h1>
              Videos <span>.</span>
            </h1>
            <p>All of my videos from internet and youtube.</p>
            <button>
              <Link className="link--btn" to="/allvideos">
                View More
              </Link>
            </button>
          </div>
        </div>
        <div className="news--section" id="news">
          <div className="section-det">
            <h1>
              News <span>.</span>
            </h1>
            <p>The news and articles written on the internet.</p>
            <button>
              <Link className="link--btn" to="/allnews">
                View More
              </Link>
            </button>
          </div>
          <div className="content">
            {news.slice(4, 6).map((n, ind) => (
              <div className="p-box">
                <ShowcaseNews
                  singleNews={singleNews}
                  setSingleNews={setSingleNews}
                  item={n}
                  key={`news#${ind}__$@0${ind}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;
