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
            <Link className="a1" to="/">Home</Link>
            <Link className="a1" to="/About">About Us</Link>
            <a className="a1" href="#" 
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}>
                    Products
            </a>
            <Link className="a1" to="/Contact">Contact Us</Link>
        </div>
        {show ? (<Products isShow={setShow}/>) : null}
        </div>
    )
}

export default NavItem