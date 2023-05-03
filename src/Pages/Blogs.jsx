import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { BlogItem } from "../Components";
import { client } from "../client";

const Blogs = ({ singleBlog, setSingleBlog }) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "#ffa25b",
          position: "absolute",
          top: "600px",
          left: "70px",
          padding: "1.4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          position: "absolute",
          background: "#ffa25b",
          top: "600px",
          left: "0",
          padding: "1.4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // fade: true,
        },
      },
    ],
  };

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "blogs"]`)
      .then((res) => setBlogs(res));
  }, []);

  return (
    <div className="blogSec" id="blogs">
      <div className="container">
        <h1>
          My Blogs <span>.</span>
        </h1>
        <div className="blog--slider">
          <Slider {...settings}>
            {blogs.map((blog) => (
              <div>
                <BlogItem
                  item={blog}
                  singleBlog={singleBlog}
                  setSingleBlog={setSingleBlog}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
