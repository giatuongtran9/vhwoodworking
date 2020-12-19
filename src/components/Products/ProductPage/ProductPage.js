import React from 'react'

import './ProductPage.css'
import { Link } from 'react-router-dom'

import Product from './Product/Product'
import Nav from '../../Nav/Nav'

const ProductPage = (props) => {


    const a = props.match.params
    console.log(a)
    return (
        <div className="productpage-container">
        <Nav />
            <div className="product-name">
                <h2 className="productname">{a.productName ? a.productName : a.type}</h2>
            </div>
            <div>
                <Link className="product-link" to='/'>Home</Link>
                |
                <Link className="product-link" href="#">Products</Link>
                |
                <Link className="product-link" to={`/product/${a.type}`}>{a.type}</Link>
                |
                <Link className="product-link" to={`/product/${a.type}/${a.productName}`}>{a.productName}</Link>
            </div> 
            <Product productName={a.productName ? a.productName : a.type} check={a.productName ? true : false}/>
        </div>
    )
}

export default ProductPage