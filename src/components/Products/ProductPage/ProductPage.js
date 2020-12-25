import React from 'react'

import './ProductPage.css'
import { Link } from 'react-router-dom'

import Product from './Product/Product'
import Nav from '../../Nav/Nav'

const ProductPage = (props) => {

    const a = props.match.params


    return (
        <div className="productpage-container">
        <Nav />
            <div className="product-name">
                <h2 className="productname">{a.productName === 'Door' || a.productName === 'Counter Top' ? a.name : a.productName}</h2>
            </div>
            <div>
                <Link className="product-link" to='/'>Home</Link>
                |
                <Link className="product-link" href="#">Products</Link>
                |
                <Link className="product-link" to={`/product/${a.productName}`}>{a.productName}</Link>
                |
                <Link className="product-link" to={`/product/${a.productName}/${a.name}`}>{a.name}</Link>
            </div> 
            <Product productName={a.productName} name={a.name} check={a.productName ? true : false}/>
        </div>
    )
}

export default ProductPage