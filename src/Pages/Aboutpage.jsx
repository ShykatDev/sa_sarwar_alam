import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Aboutpage = () => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="aboutpage"
      id="about"
    >
      <div className="container about-cont">
        <div className="left--section">
          <div className="half-box">
            <h1>
              37 <span>.</span>
            </h1>
            <p>
              Years <br />
              Working <br />
              Experience
            </p>
          </div>
        </div>
        <div className="right--section">
          <div>
            <h1>
              Who am I <span>?</span>
            </h1>
            <p>
              In my long career of 37 years, I have enriched experience by
              working in various streams of the banking sector. I have enriched
              my experience by working in various sectors of the banking sector
              which enabled me to establish myself as an accomplished banker. I
              have shown adept direction in many aspects of banking with ample
              exposure to General Management, Client Coverage, Corporate
              Banking, Risk Management, Operations, and IT Management{" "}
              <Link
                style={{ fontWeight: "500", color: "var(--secondary__color)" }}
                to="/extrabout"
              >
                more...
              </Link>
            </p>
          </div>
          <div className="firstDiv">
            <h2>(1982 - 2012)</h2>
            <p>Management Trainee at ANZ Grindlays Bank</p>
            <div className="line"></div>
          </div>
          <div className="secondDiv">
            <h2>(2012 - Present)</h2>
            <p>Managing Director& CEO in IFIC Bank</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Aboutpage;
