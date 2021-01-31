import React, { useState, useEffect } from 'react'
import './NavItem.css'
import {getcurrentUser, logout } from '../../../services/auth.service'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import LogOut from '../../../image/logout.png'
import axios from 'axios'

import apiUrl from '../../../api'

import Products from '../../Products/Products'

const NavItem = () => {

    const state = getcurrentUser()

    const [show, setShow] = useState(false)    

    const url = `${apiUrl}/products`

    const [d, setD] = useState([])

    const [size, setSize] = useState(undefined)


    useEffect(() => {
        axios.get(url).then(res => setD(res.data))

        const handleResize = () => {
            setSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        console.log(process.env.PUBLIC_URL)
        handleResize()

        return () => window.removeEventListener('resize', setSize(window.innerWidth))
    }, [])

    

    const data = d.map((product) => {
        return (
            (product.productName === 'Door' || product.productName === 'Counter Top' ? <div className="list-container">
                <NavDropdown.Item href={`/product/${product.productName}`} className='product-h1-a'>{product.productName}</NavDropdown.Item>
                <NavDropdown.Divider/>
                {product.products.map((p) => {
                    return (
                            <NavDropdown.Item href={`/product/${product.productName}/${p.name}`} className="product-li">{p.name}</NavDropdown.Item>
                    )
                })}
                <br/>
            </div> 
            : 
            <div className="list-container">
                {product.products.map((p) => {
                    return (
                        <NavDropdown.Item href={`/product/${product.productName}/${p.name}`} className="product-h1">{product.productName}</NavDropdown.Item>
                    )
                })}
            </div>)
        )
    })

    const auth = (state !== null ?
        <>
        <h3 className="a1">Hello {state.name}</h3>
        <Link to="/signin" onClick={logout}>
            <img src={LogOut} className="logout" alt="Logout"/>
        </Link>
        </>
        :
        <Link to="/signin" className="a1">Sign In</Link>
    )

    return (
        
        <div> 
        <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#2C1405'}} variant="dark">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                {/* <NavDropdown title="Products" id="responsive-navbar-nav" style={{ backgroundColor: '#2C1405'}}>
                    {data}
                </NavDropdown> */}
                {window.innerWidth > 992 ? (<Nav.Link href="#" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>Products</Nav.Link>) : 
                    <NavDropdown title="Products" id="responsive-navbar-nav" style={{ backgroundColor: '#2C1405'}}>
                        {data}
                    </NavDropdown> 
                }
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
                {auth}
                <h1 className="a1">{size}</h1>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
            {show ? (<Products isShow={setShow}/>) : null}
        </div>
    )
}

export default NavItem