import React from 'react'
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import './Footer.css'
const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>Download our App</h4>
          <p>Dowload app for Android and IOS</p>
          <img src={playstore} alt="playstore" />
          <img src={appstore} alt="appstore" />
        </div>
        <div className="midFooter">
          <h1>ECOMMERCE.</h1>
          <h4>High Quality is our first priority</h4>
          <p>Copyright 2021 &copy; Naveen</p>
        </div>
        <div className="rightFooter">
          <h4>Follow us</h4>
          <a href="#">Instagram</a>
          <a href="#">Youtube</a>
          <a href="#">Facebook</a>
        </div>
      </footer>
    );
}

export default Footer
