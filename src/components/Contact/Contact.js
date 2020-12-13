import React from 'react'

import './Contact.css'
import VH from '../../image/500-01.png'
import contactImg from '../../image/500x450-01.png'

import Nav from '../Nav/Nav'

const Contact = () => {
    return (
        <div>
            <Nav />
        <div className="contact-container">
            <div className="contact1">
                <h1 className="contact-h1">Contact Us</h1>
                <ul className="contact-list">
                    <li>Unit 1, 1145 Bellamy Rd North,
                        Scarborough, Ontario, M1H 1H5
                    </li>
                    <li>Office #: (416) 238-4458</li>
                    <li>Cell #: (416) 809-2981</li>
                    <li>E-mail: vhwoodworking@gmail.com</li>
                    <li>Website: www.vhwoodworking.com</li>
                </ul>
            </div>
            <div className="contact2">
                <img className="contact2-img" src={contactImg} alt="contactImg"/>
            </div>
            <div className="contact3">
                <img src={VH} alt="VH"/>
            </div>
        </div>
        </div>
    )
}

export default Contact