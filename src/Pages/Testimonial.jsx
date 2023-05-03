import React, { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import { TestimonialItem } from "../Components";
import { client } from "../client";

const Testimonial = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          // background: "#ffa25b",
          // background: "#FF700E",
          background: "#5ef27d",
          position: "absolute",
          top: "350px",
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
          // background: "#ffa25b",
          // background: "#FF700E",
          background: "#5ef27d",
          top: "350px",
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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "testimonials"]`)
      .then((res) => setTestimonials(res));
  }, []);

  return (
    <div className="testimonalSec" id="testimonials">
      <div className="container">
        <div className="section--det">
          <FaQuoteLeft className="quote" />
          <h1>
            Testimonials <span>.</span>
          </h1>
        </div>
        <div className="test--carousel">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div>
                <TestimonialItem item={testimonial} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
