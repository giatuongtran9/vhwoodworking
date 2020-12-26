import React from 'react';
import './Nav.css'

import NavItem from './NavItem/NavItem'

const Nav = () => {

        return (
            <div className="nav-container">
                {/* <div className="nav-link">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>Products</a>
                    <a href="#">Contact Us</a>
                </div>
                {show ? (<Products isShow={setShow}/>) : null} */}
                <NavItem />
            </div>
        )
}


export default Nav