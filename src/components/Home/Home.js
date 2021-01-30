import React from 'react'
import './Home.css'

import Nav from '../Nav/Nav'

import SlideImage from './SlideImage/SlideImage'
import i1 from '../../image/1.JPG'
import i2 from '../../image/2.JPG'
import i3 from '../../image/3.jpg'
import home from '../../image/dcmm-01.png'
import Comment from '../Comment/Comment'


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
            <div className="page-container">
            <div className="home-container">
                <Nav />
               <div className="home-upper">
                   <img className="VH" src={home} alt="VH"/>
                   
               </div>
               <div className="home-lower">
                    <SlideImage images={this.state.images}/>
               </div>

            </div>
            {/* <Comment /> */}
            </div>
        )
    }
}

export default Home