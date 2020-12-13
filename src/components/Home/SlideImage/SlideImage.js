import React, { useState, useEffect } from 'react'

import './SlideImage.css'



const SlideImage = (props) => {


    const [index, setIndex] = useState(0)
    const [active, setActive] = useState(false)
    const dot = []

    const nextSlide = () => {
        setIndex((index + 1)% props.images.length)
    }

    const prevSlide = () => {
        const prev = index - 1
        if (prev < 0) {
            setIndex(props.images.length - 1)
        } else {
            setIndex(prev)
        }
    }

    const currentSlide = (i) => {
        setIndex(i % props.images.length)
        setActive(!active)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000)
        return () => clearInterval(interval)
    }, [index])

    // for (let i=0; i < props.images.length; i++)
    // {
    //     const b = <span style={s} className={}></span>
    //     dot.push(b)
    // }


    return (
        <div>
        <div className="slider">
            {/* <div className="index">{index + 1}</div> */}
            <img className="slideImg" src={props.images[index].img} alt={index}/>

            <a className="prev" onClick={prevSlide}>❮</a>
            <a className="next" onClick={nextSlide}>❯</a>
        </div>
         <div style={{textAlign: "center"}}>
             <span className={active ? 'dotActive' : 'dot'} onClick={() => currentSlide(0)}></span>
             <span className={active ? 'dotActive' : 'dot'} onClick={() => currentSlide(1)}></span>
             <span className={active ? 'dotActive' : 'dot'} onClick={() => currentSlide(2)}></span>
         </div>
        </div>

    )
}

export default SlideImage