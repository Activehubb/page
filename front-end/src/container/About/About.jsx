import React, { useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbout(data));
  });
  return (
    <>
      <h2 className="head-text">
        <span>We build </span>Business Apps <br />
        that convert
        <span> and sells</span>
      </h2>

      <div className="app__profiles">
        {about.map((profile, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={profile.title + idx}
          >
            <img src={urlFor(profile.imgUrl)} alt={profile.title} />
            <h2 className="bold_text" style={{ marginTop: 20 }}>
              {profile.title}
            </h2>
            <p className="bold_text" style={{ marginTop: 20 }}>
              {profile.description}
            </p>
          </motion.div>
        ))}
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
