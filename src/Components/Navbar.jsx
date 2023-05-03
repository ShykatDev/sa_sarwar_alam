import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { logo } from "../Assets";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      {/*Section__Start ------------------------- desktop menu */}
      <div className="menu">
        <ul>
          <li>
            <a className="li" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="li" href="/#about">
              About me
            </a>
          </li>
          <li>
            <a className="li" href="/#education">
              Education
            </a>
          </li>
          <li>
            <a className="li" href="/#globalExp">
              Global Exposer
            </a>
          </li>
          <li>
            <a className="li" href="/#galary">
              Galary
              <ul className="submenu-1">
                <Link className="s-li" to="/allphotos">
                  Photos
                </Link>
              </ul>
              <ul className="submenu-2">
                <Link className="s-li" to="/allvideos">
                  Videos
                </Link>
              </ul>
            </a>
          </li>

          <li>
            <a className="li" href="/#news">
              News
              <ul className="submenu-1">
                <Link className="s-li" to="/allnews">
                  Print
                </Link>
              </ul>
              <ul className="submenu-2">
                <Link className="s-li" to="/allnews#electronic">
                  Electronic
                </Link>
              </ul>
            </a>
          </li>

          <li>
            <a className="li" href="/#testimonials">
              Testimonials
            </a>
          </li>

          <li>
            <a className="li" href="/#blogs">
              Blogs
              <ul className="submenu-1">
                <Link className="s-li" to="/allblogs">
                  All Blogs
                </Link>
              </ul>
            </a>
          </li>
          <li>
            <a className="li" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="extra__info">
        <span>+880 123456789</span>
      </div>
      {/*Section__Start ------------------------- mobile menu */}
      {/* <div className="logo">SAS</div> */}
      {/* Section__Start -------------------------- menu toggler*/}
      <div className="menu-toggler">
        {!mobileView ? (
          <RxHamburgerMenu onClick={() => setMobileView(true)} />
        ) : (
          <RxCross2 onClick={() => setMobileView(false)} />
        )}
      </div>

      {/*Sub__Section ------------------------- mobile menu */}
      {mobileView && (
        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="mobile__menu"
        >
          <ul>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#home">
                Home
              </a>
            </li>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#about">
                About me
              </a>
            </li>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#education">
                Education
              </a>
            </li>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#globalExp">
                Global Exposer
              </a>
            </li>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#galary">
                Galary
              </a>
            </li>

            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#news">
                News
              </a>
            </li>

            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#testimonials">
                Testimonials
              </a>
            </li>

            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#blogs">
                Blogs
              </a>
            </li>
            <li onClick={() => setMobileView(false)}>
              <a className="li" href="/#contact">
                Contact
              </a>
            </li>
            <div className="mobileSocial">
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
          </ul>
        </motion.div>
      )}
      <Outlet />
    </div>
  );
};

export default Navbar;
