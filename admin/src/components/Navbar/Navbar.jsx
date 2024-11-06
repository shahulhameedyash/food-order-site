import React from 'react'
import './Navbar.css'
import { admin } from '../../assets/assets'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={admin.logo} /><p className='para'>Admin panel</p> 
        
            <img src={admin.user} alt="" />
        </div>
    )
}

export default Navbar
