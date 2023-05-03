import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const Social = () => {
  return (
    <div className="social">
      <div className="up-line"></div>
      <div className="social-links">
        <a
          href="https://www.facebook.com/sarwar.shah"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookF className="s-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-shah-alam-sarwar-90404313/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedinIn className="s-icon" />
        </a>

        <a
          href="https://www.youtube.com/@archiveshahasarwar6422"
          rel="noreferrer"
          target="_blank"
        >
          <FaYoutube className="s-icon" />
        </a>
      </div>
      <div className="down-line"></div>
    </div>
  );
};

export default Social;
