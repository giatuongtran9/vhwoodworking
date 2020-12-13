import React from 'react'

import './About.css'
import smallVH from '../../image/123-01.png'
import aboutImg from '../../image/IMG_8007.jpg'
import aboutImg2 from '../../image/1-200x150-01.png'
import logo from '../../image/127x150.png'

import Nav from '../Nav/Nav'

const About = () => {
    return (
        <div>
            <Nav />
        <div className="about-container">
            <div className="about-1">
                <div className="container1">
                    <div className="block1"></div>
                    <img className="about-img2" src={aboutImg2} alt="aboutImg2"/>
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <div className="container2">
                    <h1>About Us</h1>
                    <p>VH Specialized Woodworking has been in business since 2008</p>
                    <p>We specialized in designing and building displays, kiosks, kitchen cabinets, vanities, countertops, reception desks, benches, counters and cabinets for medical units, churches, restaurants, cemeteries, and properties management housing in Ontario</p>
                </div>
            </div>
            <div className="about-2">
                <div className="block2"></div>
                <img className="about-img" src={aboutImg} alt="about"/>
                <img className="image2" src={smallVH} alt="SmallVHLogo"/>
            </div>
            <div className="about-3">
                <p>We create design, delivery and installation. Our client is provided with computer generated floor plans and 3D drawings.</p>
                <p>We also have wide selections of all colors, patterns and textures. We offer competitive pricing, greate customer service and treated our clients with professionalism and care. Our clients have expressed their satisfaction with the quality of our products can craftmanship.</p>
            </div>
        </div>
        </div>
    )
}

export default About