import React, {useEffect} from 'react'

import './Product.css'

import { Link } from 'react-router-dom'

import {productsData } from '../../../../productData'

const Product = (props) => {


    const data = productsData.map((product) => {
        return product.products.filter((data) => data.name === props.productName).map((p) => p.type.map((i) => {
            return ( 
                <div className="p-container">
                    <h2 className="product-h2">{i.typeName}</h2>
                    {i.image.map((img) => {
                        return (
                            <div className="p1-container">
                                <img className={`${props.productName === 'Solid Wood' ? 'p2-container' : 'product-img'}`} src={img.img} alt={img.alt}/>
                                <h5>{img.kind}</h5> 
                                <h4>{img.alt}</h4>
                            </div>
                        )
                    })}
                </div>
            )
        }))
    })

    const data2 = productsData.filter((data) => data.productName === props.productName).map((p) => p.products.map((i) => {
        return (
            props.productName === "Door" || props.productName === "Counter Top" ? 
            <Link className="p1" to={`/product/${props.productName}/${i.name}`}>
                <img className="productImg" src={i.nameImg}/>
                <p className="p2">{i.name}</p>
            </Link>
            :
            i.type.map((a) => {
                return (
                    <div className="p-container">
                        <h2 className="product-h2">{a.typeName}</h2>
                        {a.image.map((img) => {
                            return (
                                <div className="p1-container">
                                    <img className='product-img' src={img.img} alt={img.alt}/>
                                    <h4>{img.alt}</h4>
                                    <h5>{img.kind}</h5>
                                </div>
                        )
                    })}
                    </div>
                )
            })
        )
    }))
    console.log(data2)
    return (
        <div className="product-container">{props.check ? data : data2}</div>
    )
}

export default Product