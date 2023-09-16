import React from 'react'
import { Link as ScrollLink, Element } from 'react-scroll';

const Footer = () => {
  return (
    <>
    <footer>
    <div className="partners">
      <img src=".\src\assets\airbnb.png" alt="" />
      <img src=".\src\assets\binance.png" alt="" />
      <img src=".\src\assets\coinbase.png" alt="" />
      <img src=".\src\assets\dropbox.png" alt="" />
    </div>
    <div className="join-us">
      <div className="join-desc">
        <h1>
        Ready to unlock the full potential of  <span className='afriguard'>Afriguard</span> ?
        </h1>
        <p>
        Join us today and take control of your financial journey! 
        Sign up now to experience seamless billing and invoicing, 
        powerful financial insights, and more. 
        Don't miss out on the opportunity to simplify your finances and
         boost your productivity. Get started below and join the Afriguard
         community!
        </p>
      </div>
      <button className="btn">
        Get Started
      </button>
    </div>
    <div className="footer">
      <div className="footer-logo">
     <div className="logo-section">
     <ScrollLink to="home" className='logo-link' smooth={true} duration={500}>
              <img src="./src/assets/diamond.svg" alt="" className="logo" />
              <h1 className="logo-name">AfriGuard</h1>
            </ScrollLink>
     </div>
     <p className="slogan">
          Your Trusted Financial Partner in Africa
          </p>
      </div>
      <div className="footer-links">
        <div>
          <h1>Usefull links</h1>
          <p>Content</p>
          <p>Location</p>
          <p>Explore</p>
          <p>Create</p>
          <p>Terms & Services</p>
        </div>
        <div>
          <h1>Community</h1>
          <p>Help center</p>
          <p>Partners</p>
          <p>Suggestions</p>
          <p>Blog</p>
          <p>Newsletter & Services</p>
        </div>
        <div>
          <h1>Partner</h1>
          <p>Our Partners</p>
          <p>Become a partner</p>
        </div>
      </div>
    </div>
    </footer>
    <div className="ssm">
      <div>
        <p>Copyright © 2023Afriguard. All Rights Reserved</p>
      </div>
      <div className='smm-links'>
        <img src="./src/assets/instagram.svg" alt="" />
        <img src="./src/assets/facebook.svg" alt="" />
        <img src="./src/assets/twitter.svg" alt="" />
        <img src="./src/assets/linkedin.svg" alt="" />
      </div>
    </div>
    </>
  )
}

export default Footer