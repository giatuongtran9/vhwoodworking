import React from 'react'
import './Home.css'

import Nav from '../Nav/Nav'

import SlideImage from './SlideImage/SlideImage'
import VH from '../../image/VH.png'
import ava from '../../image/550x400-2-01.png'
import i1 from '../../image/1.JPG'
import i2 from '../../image/2.JPG'
import i3 from '../../image/3.jpg'

class Home extends React.Component {
    state = {
        images: [
            {img: i1, num: 1},
            {img: i2, num: 2},
            {img: i3, num: 3}
        ]
    }


    render() {
        return (
            <div className="home-container">
                <Nav />
               <div className="home-upper">
                   <img src={VH} alt="VH"/>
                   <img src={ava} alt="ava"/>
               </div>
               <div className="home-lower">
                    <SlideImage images={this.state.images}/>
               </div>
            </div>
        )
    }
}

export default Home