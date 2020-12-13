import React, { useState } from 'react';
import './Nav.css'

import NavItem from './NavItem/NavItem'
import Products from '../Products/Products'

const Nav = () => {

    const [show, setShow] = useState(false)

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