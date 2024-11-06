import React from 'react'
import './Fooder.css'
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
const Fooder = () => {
    return (
        <div className='fooder' id='fooder'>
            <div className="fooder-content">
                <div className="fooder-content-left">
                    <h2>YASH</h2>
                    <p>This site was devloped for our education perpose you can use this site for free you can support us you can follow as thanks for viste my site </p>
                    <div className="fooder-social-icons">
                        <a href='https://www.facebook.com/'>  <FaFacebookSquare className='icon' /></a>
                        <a href='https://x.com/' ><FaTwitterSquare className='icon' /></a>
                        <a href='https://www.instagram.com' > <FaLinkedin className='icon' /></a>
                    </div>
                </div>

                <div className="fooder-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="fooder-content-right">
                    <h2>CONTECT</h2>
                    <ul>
                        <li>Phone: +91 63699 20000</li>
                        <li>Email: Yasar@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copy-right">
                Copyright 2024 &copy; YASH.com- All Right Reserved
            </p>


        </div>
    )
}

export default Fooder
