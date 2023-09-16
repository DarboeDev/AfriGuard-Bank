import React, { useState } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';

function MyNavbar() {
  const [toggle, setToggle] = useState(false);

  function toggleHandle() {
    setToggle(true);
    console.log(toggle);
  }

  function exitToggle() {
    setToggle(false);
  }

  if (toggle) {
    return (
      <nav className='navbar-menu'>
        <div className="logo-section">
          <div>
            <ScrollLink to="home" className='logo-link' smooth={true} duration={500}>
              <img src="./src/assets/diamond.svg" alt="" className="logo" />
              <h1 className="logo-name">AfriGuard</h1>
            </ScrollLink>
          </div>
          <div className='exit-div'>
            <img className='exit' src="./src/assets/close.svg" alt="" onClick={exitToggle} />
          </div>
        </div>
        <div className="menu-links">
          <ScrollLink to="home" className='link' smooth={true} duration={500}>
            Home
          </ScrollLink>
          <ScrollLink to="about" className='link' smooth={true} duration={500}>
            About Us
          </ScrollLink>
          <ScrollLink to="features" className='link' smooth={true} duration={500}>
            Features
          </ScrollLink>
          <ScrollLink to="billing" className='link' smooth={true} duration={500}>
            Billing
          </ScrollLink>
        </div>
      </nav>
    );
  }

  return (
    <nav className='navbar'>
      <div className="logo-section">
        <ScrollLink to="home" className='logo-link' smooth={true} duration={500}>
          <img src="./src/assets/diamond.svg" alt="" className="logo" />
          <h1 className="logo-name">AfriGuard</h1>
        </ScrollLink>
      </div>
      <img src="./src/assets/menu.svg" alt="" className="menu" onClick={toggleHandle} />
      <div className="nav-links">
        <ScrollLink to="home" className='link' smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="about" className='link' smooth={true} duration={500}>
          About Us
        </ScrollLink>
        <ScrollLink to="features" className='link' smooth={true} duration={500}>
          Features
        </ScrollLink>
        <ScrollLink to="billing" className='link' smooth={true} duration={500}>
          Billing
        </ScrollLink>
      </div>
    </nav>
  );
}

export default MyNavbar;
