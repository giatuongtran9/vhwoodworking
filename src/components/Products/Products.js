import React from 'react'

import './Products.css'

import ProductList from './ProductList/ProductList'

const Products = (props) => {
    return (
        <div className="products-container">
            <ProductList isShow={props.isShow}/>
        </div>
    )
}

export default Products