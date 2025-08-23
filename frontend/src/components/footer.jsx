import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "../styles/footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="logo">⚙ Shop<span>O</span></div>
          <div className="about">
            <h3>About Us</h3>
            <p>We know there are a lot of thread developers, but we pride into a firm in the industry.</p>
          </div>
          <div className="footer-links">
            <h3>Feature</h3>
            <ul>
              <li>About Us</li>
              <li>Terms Condition</li>
              <li>Best Products</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>General Links</h3>
            <ul>
              <li>Blog</li>
              <li>Tracking Order</li>
              <li>Become Seller</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Helpful</h3>
            <ul>
              <li>Flash Sale</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-icons">
            <FaInstagram className="icon" />
            <FaFacebookF className="icon" />
            <FaYoutube className="icon" />
          </div>
          <p>© 2022 <span>QuomodoSoft</span> All rights reserved</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
