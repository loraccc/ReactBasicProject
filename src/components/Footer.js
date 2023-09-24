import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
