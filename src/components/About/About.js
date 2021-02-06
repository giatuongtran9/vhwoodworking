import React from 'react'

import './About.css'
import smallVH from '../../image/123-01.png'

import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'

const About = () => {
    return (

        <div className="about1">
            <Nav />
            <div className="about-container">
                <h1 className="about-h1">About Us</h1>
                <div className="about-small">
                <p className="about-p">VH Specialized Woodworking has been in business since 2008</p>
                <p className="about-p">We specialized in designing and building displays, kiosks, kitchen cabinets, vanities, countertops, reception desks, benches, counters and cabinets for medical units, churches, restaurants, cemeteries, and properties management housing in Ontario</p>
                <p className="about-p">We create design, delivery and installation. Our client is provided with computer generated floor plans and 3D drawings.</p>
                <p className="about-p">We also have wide selections of all colors, patterns and textures. We offer competitive pricing, greate customer service and treated our clients with professionalism and care. Our clients have expressed their satisfaction with the quality of our products can craftmanship.</p>
                <img className="image2" src={smallVH} alt="SmallVHLogo"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About