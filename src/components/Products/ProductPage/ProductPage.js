import React from 'react'

import './ProductPage.css'
import background from '../../../image/background-01.png'
import { Link } from 'react-router-dom'

import Product from './Product/Product'
import Nav from '../../Nav/Nav'
import Footer from '../../Footer/Footer'

const ProductPage = (props) => {

    const a = props.match.params

    const style = (a.productName === 'Counter Top' ? {'backgroundColor': 'rgb(249, 166, 2)'} : {'backgroundImage': `url(${background})`})

    return (
        <div className="productpage-container" style={style}>
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
        <Footer/>
        </div>
    )
}

export default ProductPage