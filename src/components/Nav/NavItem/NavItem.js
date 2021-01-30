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

    useEffect(() => {
        axios.get(url).then(res => setD(res.data))
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

    const auth = (state.name !== null ?
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
        // <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/">Logo</Link>
        //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span class="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarContent">    
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active a1" aria-current="page" to="/about">About Us</Link>
        //                 </li>
        //                 <li className="nav-item dropdown">
        //                     <a className="nav-link dropdown-toggle active" id="productsDropdown" data-bs-toggle="dropdown" aria-expanded="false" aria-current="page" href="#" role="button">Products</a>
        //                     <ul className="dropdown-menu" aria-labelledby="productsDropdown">
        //                         <a class="dropdown-item" href="#">Action</a>
        //                         <a class="dropdown-item" href="#">Another action</a>
        //                     </ul>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
        //                 </li>
        //             </ul>

        //             <span class="navbar-text">
        //                 {auth}
        //             </span>
                
        //         </div>
        //     </div>
        // </nav>

        <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#2C1405'}} variant="dark">
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <NavDropdown title="Products" id="responsive-navbar-nav" style={{ backgroundColor: '#2C1405'}}>
                    {data}
                </NavDropdown>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
            <Nav>
                {auth}
                
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavItem