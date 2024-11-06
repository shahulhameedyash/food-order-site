import React, { useContext, useState } from 'react'
import './Navbar.css'
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
const Navbar = ({ setShowLogin }) => {
  const [menu, setmenu] = useState("home")

  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='Navbar'>
      <Link to='/'> <img className='logo' src={assets.logo}  /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""} id="li">home</Link>
        <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""} id="li">menu</a>
        <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} id="li">mobile-app</a>
        <a href='#fooder' onClick={() => setmenu("contect us")} className={menu === "contect us" ? "active" : ""} id="li">contect us</a>
      </ul>
      <div className="navbar-right">
        <Link to='/search'><FaSearch className="search" /></Link>
        <div className="navbar-basket-icon">
          <Link to='/cart'><FaShoppingBasket className="shopping" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : 'dot'}></div>
        </div>
        {!token ? <button onClick={() => setShowLogin(true)} className='btn'>sign in</button> :
          <div className='navbar-profile'>
            <img src={assets.user} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate('/myorders')}><FaShoppingBasket /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><BiLogOut /><p>Logout</p></li>
            </ul>
          </div>}


      </div>

    </div>
  )
}

export default Navbar
