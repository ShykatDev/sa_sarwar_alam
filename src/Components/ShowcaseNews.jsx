import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { urlFor } from "../client";

const ShowcaseNews = ({ item, setSingleNews }) => {
  const handleSingleNews = () => {
    setSingleNews(item);
  };

  return (
    <div className="showcase--news">
      <div className="front">
        <img src={urlFor(item.mainimg)} alt="" />
      </div>
      <div className="back">
        <div>
          <small>{item.dop}</small>
          <h1>{item.headline}</h1>
          <p>{item.headline}</p>
        </div>

        <Link onClick={handleSingleNews} to="/singlenews">
          Read more
          <FaLongArrowAltRight className="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ShowcaseNews;
