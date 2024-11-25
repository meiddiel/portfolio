import React from "react";
import "../styles/FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Lot IVA 32 Ambatomanoina</p>
              <p>Andoharanofotsy, Madagasikara</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> +261 34 61 982 03
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> tokymickaelrivo@gmail.com
            </h4>
          </div>

        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>This is me Toky Mickael. CEO & Founder of MDagoTech. I enjoy discussing new projects and design challenge</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
