import React from 'react';
import "../FOOTER/Fotter.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-details">
          <h2>Foodmart</h2>
          <p>Food at the doorstep of your convenience.</p>
          <div className="contact">
            <p>- 57 Green St., Suite 4A(2nd floor), NY</p>
            <p>- example@email.com</p>
            <p>- +1 650-123-4567</p>
          </div>
        </div>
        <div className="footer-section company">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Support Center</li>
          </ul>
        </div>
        <div className="footer-section category">
          <h3>Category</h3>
          <ul>
            <li>Fruits & Vegetables</li>
            <li>Snack & Spice</li>
            <li>Juices & Drinks</li>
            <li>Fast Food</li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Subscribe Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Search here..." />
          </form>
          <div className="social-media">
            {/* Social media icons go here */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2014 Foodmart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
