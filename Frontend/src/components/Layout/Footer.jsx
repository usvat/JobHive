import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Raj Gupta and Usvat Zehra Naqvi</div>
      <div>
      
        <Link to={"https://www.youtube.com"} target="_blank">
          <FaYoutube />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/raj-gupta-503a4231a/"}
          target="_blank"
        >
          <FaLinkedin />
        </Link>
        <Link
          to={"https://www.linkedin.com/in/"} // ana's linkedin
          target="_blank"
        >
          <FaLinkedin />
        </Link>

      </div>
    </footer>
  );
}

export default Footer;
