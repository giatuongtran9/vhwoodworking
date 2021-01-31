import React from 'react'

import './Footer.css'
import fb from '../../image/facebook.png'
import ig from '../../image/ig.png'
import { Navbar, Nav } from 'react-bootstrap'

const Footer = () => {
    return (
        <Navbar className="footer" style={{ backgroundColor: '#2C1405'}} variant="dark">
            <Navbar.Brand href="#">
                <img src={fb} width="30px" height="30px" alt="fblogo"/>
            </Navbar.Brand>
            <Navbar.Brand href="#">
                <img src={ig} width="30px" height="30px" alt="iglogo"/>
            </Navbar.Brand>
            {/* <Navbar.Collapse className="justify-content" */}
        </Navbar>
    )
}

export default Footer