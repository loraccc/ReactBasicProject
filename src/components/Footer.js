import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon /> <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
      </div>
      <p>&copy; 2023 CarolCars.com</p>
      {/* <h1>ahahhaha</h1> */}
    </div>
  );
}

export default Footer;
