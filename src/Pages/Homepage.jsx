import React from "react";
import { Videomodal } from "../Components";
import {
  About,
  Education,
  Global,
  Galary,
  Testimonial,
  Blogs,
  Contact,
} from "../Pages";
import { motion } from "framer-motion";


const Homepage = ({ singleBlog, setSingleBlog, singleNews, setSingleNews, setSingleExpo }) => {
  return (
    <>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="homepage"
        id="home"
      >
        <div className="container">
          <Videomodal />

          <div className="text-box">
            <h1>
              Shah Alam Sarwar <span>.</span>
            </h1>
            <h2>
              CHIEF EXECUTIVE OFFICER
              <br />
              IFIC BANK LIMITED
            </h2>
            <p >
              One of the largest private sector banks of Bangladesh with 1180
              branches with Sub-branches and 4906 employees.
            </p>
          </div>
        </div>
      </motion.div>

      <About />
      <Education />
      <Global setSingleExpo={setSingleExpo}/>
      <Galary singleNews={singleNews} setSingleNews={setSingleNews} />
      <Testimonial />
      <Blogs singleBlog={singleBlog} setSingleBlog={setSingleBlog} />
      <Contact />
    </>
  );
};

export default Homepage;
