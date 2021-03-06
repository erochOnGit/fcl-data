import React from "react";
import Link from "react-router-dom/Link";
import Logo from "theme/ui/atoms/Logo";
import Navigation from "theme/modules/Header/Navigation";
import "./Footer.scss";

const Footer = isProductPage => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      {isProductPage ? null : <Navigation />}
    </footer>
  );
};

export default Footer;
