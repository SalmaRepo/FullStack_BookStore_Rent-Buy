import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        textAlign: "center",
        position:"fixed",     
        bottom: 0,
        width: "100%",
      }}>
      <div>
        <p>Contact Us: test@gmail.com | Phone: +49 123456789</p>
      </div>

      <div
        style={{
          paddingTop: "5px",
          display: "flex",
          justifyContent: "center",
        }}>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-linkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-faceBook">
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>&copy; 2023 Your Website Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
