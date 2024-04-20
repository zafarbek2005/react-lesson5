import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import "./Navbar.scss";
import Navbar_bot from './Navbar-bot';

const Navbar_top = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className='head'>
        <div className="nav-top Conteiner">
          <div className="menu-icon" onClick={toggleMenu}>
            <span>
              <CiMenuBurger />
            </span>
          </div>
          <div className={`items ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#">Home</a></li>
              <li>
                <select name="category">
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                </select>
              </li>
              <li>
                <select name="products">
                  <option value="Category">Products</option>
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                </select>
              </li>
              <li>
                <select name="pages">
                  <option value="Category">Pages</option>
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                </select>
              </li>
              <li>
                <select name="blog">
                  <option value="Category">Blog</option>
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                </select>
              </li>
              <li>
                <select name="elements">
                  <option value="Category">Elements</option>
                  <option value="Category">Category</option>
                  <option value="Category">Category</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="tel">
            <div>
              <BsTelephone />
            </div>
            <div>
              <p>+123 ( 456 ) ( 7890 )</p>
            </div>
          </div>
        </div>
        <Navbar_bot/>
      </header>
    </>
  );
};

export default Navbar_top;
