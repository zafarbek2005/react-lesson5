import React from 'react'
import "./Navbar.scss"
import nav_logo from "./img/nav-logo.svg"
import { CiSearch } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
function Navbar_bot() {
  return (
    <>
    <header>
    <div className="nav-bot Conteiner">
        <div className="nav-logo">
            <a href="#">
                <img src={nav_logo} alt="nav-logo" />
            </a>
        </div>
        <div className="nav-search">
            <div className="int">
                <input type="text" placeholder='   Search For items...' />
            </div>
            <select name="d" id="sel">
                <option value="k">All Categories</option>
                <option value="k">All Categories</option>
                <option value="k">All Categories</option>
            </select>
            <div className="s">
                <CiSearch />
            </div>
        </div>

        <div className="nav-wishes">
            <div className="user">
             <button>{<BiUser /> }</button>
            <span>Account</span>
            </div>
            <div className="user">
            <button><FaRegHeart /></button>
            <span>Wishlist</span>
            </div>
            <div className="user">
            <button><SlBasket /></button>
            <span>Cart</span>
            </div>
        </div>
    </div>

    </header>
    </>

  )
}

export default Navbar_bot