import React from 'react'

import './ProductPage.css'

import Product from './Product/Product'
import Nav from '../../Nav/Nav'

const ProductPage = (props) => {

    const a = props.match.params
    console.log(a)
    return (
        <div className="productpage-container">
        <Nav />
            <div className="product-name">
                <h2 className="productname">{a.productName}</h2>
            </div>
            <div>
                <a className="product-link" href="#">Home</a>
                |
                <a className="product-link" href="#">Products</a>
                |
                <a className="product-link" href="#">{a.type}</a>
                |
                <a className="product-link" href="#">{a.productName}</a>
            </div> 
            <Product productName={a}/>
        </div>
    )
}

export default ProductPage