import React from "react";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./Footer.css";

function Footer() {
  return (
    <>
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center", marginTop: "50px", marginBottom: "10px" }}
      >
        Developed by Khem Sok 🎯
      </Typography>
      <ul
        className="footer-line"
        style={{
          listStyleType: "none",
          margin: "0",
          padding: "0",
          overflow: "hidden",
          textAlign: "center",
          marginBottom: "50px"
        }}
      >
        <li style={{ display: "inline-block", marginRight: "20px" }}>
          <a href="https://www.linkedin.com/in/khem-sok-5a42a2165/">
            <LinkedInIcon className="icon-footer" />
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "20px" }}>
          <a href="https://github.com/khemsok">
            <GitHubIcon className="icon-footer" />
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "20px" }}>
          <a href="https://www.instagram.com/_aceeeeeee_/">
            <InstagramIcon className="icon-footer" />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Footer;
