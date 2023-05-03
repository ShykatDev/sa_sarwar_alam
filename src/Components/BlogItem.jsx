import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../client";

const BlogItem = ({ item, singleBlog, setSingleBlog }) => {
  const handleSinglePage = () => {
    setSingleBlog({ ...singleBlog, item });
  };

  return (
    <div className="blog--item">
      <img src={urlFor(item.blogimg)} alt="" />
      <div className="content">
        <small>{item.dop}</small>
        <h3>{item.title}</h3>
        <p>{item.shortdesc}</p>

        <button className="blog-btn">
          <Link className="link--btn" onClick={handleSinglePage} to="/singleblog">
            {" "}
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
