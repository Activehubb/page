import React from "react";
import { images } from "../../constant";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Work", "Skills", "Testimonials"].map(
          (list) => (
            <>
              <li key={list} className="app__flex p-text">
                <div></div>
                <a href={`#${list}`}>{list}</a>
              </li>
            </>
          )
        )}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleToggle} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={handleToggle} />{" "}
            <ul>
              {[
                "Home",
                "About",
                "Contact",
                "Work",
                "Skills",
                "Testimonials",
              ].map((list) => (
                <>
                  <li key={list}>
                    <a href={`#${list}`} onClick={handleToggle}>
                      {list}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
