import React from 'react'
import './Sidebar.css'
import { admin } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img src={admin.add} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img src={admin.order} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <img src={admin.order} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
