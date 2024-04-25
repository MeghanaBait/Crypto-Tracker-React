import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import "./style.css"
function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <Link to="https://github.com/misterKumar" >
            <GitHubIcon className="social-link" />
        </Link>

        <Link to="https://www.facebook.com/profile.php?id=100017529060039">
          <FacebookIcon className="social-link" />
        </Link>

        <Link to="mailto:killisuneel@gmail.com">
          <EmailIcon className="social-link" />
        </Link >
          
        <Link to="/">
          <TwitterIcon className="social-link" />
        </Link>
        
        <Link to="/">
          <InstagramIcon className="social-link" />
        </Link>
          
      </div>
    </div>
  );
}

export default Footer;