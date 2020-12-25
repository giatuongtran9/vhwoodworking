import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from '../../../../api'

import './Product.css'

import { Link } from 'react-router-dom'


const Product = (props) => {
    const q = props.name.split(" ").join("%20")
    const url = `${apiUrl}/product/${props.productName}/${q}`
    const [data, setData] = useState()

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
    }, [])

    console.log(url)
    console.log(data)

    let a
    if (data) {
        a = data.productType.map((i) => {
        return (
            <div className='p-container'>
                <h2 className='product-h2'>{i.typeName}</h2>
                {i.typeImage.map((img) => {
                    return (
                        <div className="p1-container">
                            <img className={`${props.name === 'Solid Wood' ? 'p2-container' : 'product-img'}`} src={img.img} alt={img.alt}/>
                            <h5>{img.kind}</h5> 
                            <h4>{img.alt}</h4>
                        </div>
                    )
                })}
            </div>
        )
    })
}


    // const data2 = productsData.filter((data) => data.productName === props.productName).map((p) => p.products.map((i) => {
    //     return (
    //         props.productName === "Door" || props.productName === "Counter Top" ? 
    //         <Link className="p1" to={`/product/${props.productName}/${i.name}`}>
    //             <img className="productImg" src={i.nameImg}/>
    //             <p className="p2">{i.name}</p>
    //         </Link>
    //         :
    //         i.type.map((a) => {
    //             return (
    //                 <div className="p-container">
    //                     <h2 className="product-h2">{a.typeName}</h2>
    //                     {a.image.map((img) => {
    //                         return (
    //                             <div className="p1-container">
    //                                 <img className='product-img' src={img.img} alt={img.alt}/>
    //                                 <h4>{img.alt}</h4>
    //                                 <h5>{img.kind}</h5>
    //                             </div>
    //                     )
    //                 })}
    //                 </div>
    //             )
    //         })
    //     )
    // }))
    // console.log(data2)
    return (
        <div className="product-container">{a}</div>
    )
}

export default Product