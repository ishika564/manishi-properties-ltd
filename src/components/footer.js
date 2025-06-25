import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section-left">
          <div className="footer-logo">
            {/* <Home className="logo-icon" /> */}
            <span>Manishi Properties Ltd.</span>
          </div>
          <h5>RERA certified</h5>
          <p>"My passion, Your trust makes it all"</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="https://www.instagram.com/yatishbohra?utm_source=ig_web_button_share_sheet&igsh=MW0zNG4zNzRlMWw0aA==" aria-label="Instagram"><Instagram /></a>
            <a href="https://www.linkedin.com/in/yatish-bohra-101172143/" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
        
        <div className='footer-section-right'>
            <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/buy">Buy Property</Link></li>
                {/* <li><Link to="/featured">Featured Properties</Link></li> */}
                <li><Link to="/founder">Founder's Note</Link></li>
                <li><Link to="/sell">Sell Property</Link></li>
                
            </ul>
            </div>
            
            <div className="footer-section">
                <h3>Services</h3>
                <ul>
                    {/* <li><Link to="/dashboard">Property Dashboard</Link></li> */}
                    {/* <li><Link to="/gallery">Property Gallery</Link></li> */}
                    {/* <li><Link to="/testimonials">Client Reviews</Link></li> */}
                    <li><Link to="/founder">Our Story</Link></li>
                </ul>
                <br/>
                <h3>Contact Info</h3>
                <div className="contact-info">
                    <div className="contact-item">
                    <Mail size={16} />
                    <span>yatishbohra@gmail.com</span>
                    </div>
                    <div className="contact-item">
                    <Phone size={16} />
                    <span>+91 99268-34555</span>
                    </div>
            </div>
            </div>
        </div>

        {/* <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone size={16} />
              <span>+91 99268-34555</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>yatishbohra@gmail.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>123 Real Estate Ave, City, State 12345</span>
            </div>
          </div>
        </div> */}
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Manishi Pro. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;