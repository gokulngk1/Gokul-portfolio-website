import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="nav-wapper">
        <div className="nav-content">
            <img className = "logo"src="src/assets/logo-gokul.png" alt="logo" />
            <ul>
                <li className="menu-item">Home</li>
            </ul>
            <ul>
                <li className="menu-item">Skills</li>
            </ul>
            <ul>
                <li className="menu-item">Experiance</li>
            </ul>
            <ul>
                <li className="menu-item">Contact</li>
            </ul>
            <button type="button" className='contact-btn' onClick={()=>{
            }}>Hire Me</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar