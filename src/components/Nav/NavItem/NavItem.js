import React, { useState } from 'react'
import './NavItem.css'

import { Link } from 'react-router-dom'

import Products from '../../Products/Products'

const NavItem = () => {

    const [show, setShow] = useState(false)    


    return (
        <div className="nav">

        <div className="navitem-container">
            <div>Logo</div>
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <a href="#" 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                    Products
            </a>
            <Link to="/Contact">Contact Us</Link>
        </div>
        {show ? (<Products isShow={setShow}/>) : null}
        </div>
    )
}

export default NavItem