import React, { useState } from 'react'
import './NavItem.css'
import {getcurrentUser, logout } from '../../../services/auth.service'
import { Link } from 'react-router-dom'
import LogOut from '../../../image/logout.png'

import Products from '../../Products/Products'

const NavItem = () => {

    const state = getcurrentUser()
    const [show, setShow] = useState(false)    


    const auth = (state !== null ?
        <>
        <h3 className="a1">Hello {state.name}</h3>
        <Link to="/signin" onClick={logout}>
            <img src={LogOut} className="logout" alt="Logout"/>
        </Link>
        </>
        :
        ''
    )

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
            {auth}
        </div>
        {show ? (<Products isShow={setShow}/>) : null}
        </div>
    )
}

export default NavItem