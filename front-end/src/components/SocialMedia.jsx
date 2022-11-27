import React from "react";
import {
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsStackOverflow,
} from "react-icons/bs";

import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://github.com/activehubb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>

      <a
        href="https://stackexchange.com/users/20347136/activehub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsStackOverflow />
      </a>
      <a
        href="https://www.linkedin.com/in/miracle-olakunle-332b58241/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://twitter.com/ActivehubM"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialMedia;
