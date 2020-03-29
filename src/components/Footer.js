import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  socialIcon: {
    transition: ".2s ease-in",
    "&:hover": {
      color: "#424242 !important"
    }
  }
});

function Footer({ theme }) {
  const classes = useStyles();
  const styleIcon = theme === "light" ? { color: "black" } : { color: "white" };
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
          <a
            href="https://www.linkedin.com/in/khem-sok-5a42a2165/"
            target="_blank"
          >
            <LinkedInIcon className={classes.socialIcon} style={styleIcon} />
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "20px" }}>
          <a href="https://github.com/khemsok" target="_blank">
            <GitHubIcon className={classes.socialIcon} style={styleIcon} />
          </a>
        </li>
        <li style={{ display: "inline-block", marginRight: "20px" }}>
          <a href="https://www.instagram.com/_aceeeeeee_/" target="_blank">
            <InstagramIcon className={classes.socialIcon} style={styleIcon} />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Footer;
