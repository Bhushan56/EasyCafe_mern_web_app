import React from "react";
import "./Footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <FaPhoneAlt /> +1 (555) 123-4567
            </li>
            <li>
              <FaPhoneAlt /> +1 (555) 987-6543
            </li>
            <li>
              <IoLogoWhatsapp /> +1 (555) 555-5555
            </li>
            <li>
              <FaEnvelope /> info@foodordering.com
            </li>
            <li>
              <FaEnvelope /> support@foodordering.com
            </li>
            <li>
              <FaMapMarkerAlt /> 123 Main St, Anytown, USA
            </li>
          </ul>
        </div>
      
        {/* <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a href="#"><AiFillFacebook /></a>
            <a href="#"><AiFillTwitterCircle /></a>
            <a href="#"><AiFillInstagram /></a>
          </div>
          <div className="store-icons">
            <a href="#"><img src="https://i.ibb.co/zX9nJGr/google-play.png" alt="Google Play Store" /></a>
          </div>
        </div> */}
      </div>
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          We are a food ordering website that allows you to order your favorite
          meals from your favorite restaurants and have them delivered to your
          doorstep. Our mission is to make food ordering easy, fast, and
          convenient for everyone.
        </p>
      </div>
      <div className="footer-section">
          <p style={{textAlign:"center"}}>
            Copyright 1999-2023 by Refsnes Data. All Rights Reserved. W3Schools
            is Powered by W3.CSS.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
