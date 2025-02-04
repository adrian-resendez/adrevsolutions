import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        {/* Home Link */}
        <li><a href="/">Home</a></li>

        {/* Services Dropdown */}
        <li className="dropdown">
          <a href="#" className="dropbtn">Services</a>
          <div className="dropdown-content">
            <a href="/services/ad-space-selling">Ad Space Selling</a>
            <a href="/services/web-design">Web Design</a>
            <a href="/services/social-media-management">Social Media Management</a>
            <a href="/services/targeted-ad-campaigns">Targeted Ad Campaigns</a>
          </div>
        </li>

        {/* Portfolio Link */}
        <li><a href="/portfolio">Portfolio</a></li>

        {/* About Us Link */}
        <li><a href="/about">About Us</a></li>

        {/* Contact Link */}
        <li>
          <a href="mailto:work.resendez@gmail.com" className="contact-link">
            Contact
          </a>
        </li>

        {/* LinkedIn Dropdown */}
        <li className="dropdown">
          <a href="#" className="dropbtn">LinkedIn</a>
          <div className="dropdown-content">
            <a
              href="https://www.linkedin.com/in/jacob-ormonde-241318203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AdRev Owner/CEO
            </a>
            <a
              href="https://www.linkedin.com/in/fernando-resendez-08451b265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Design Lead
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;