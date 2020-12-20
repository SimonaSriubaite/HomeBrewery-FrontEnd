import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__paragraph">
        &copy; {new Date().getFullYear()} HomeBrewery
      </p>
    </div>
  );
}

export default Footer;
