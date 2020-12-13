import React from 'react'
import { Link } from 'react-router-dom'

import { productsData } from '../../../productData'

import './ProductList.css'

const ProductList = (props) => {

    const data = productsData.map((product) => {
        return (
            <div>
                <Link to="#" className="product-h1">{product.productName}</Link>
                {product.products.map((p) => {
                    return (
                        <ul>
                            <li><Link to={`/product/${product.productName}/${p.name}`} onClick={() => props.isShow(false)} className="product-li">{p.name}</Link></li>
                        </ul>
                    )
                })}
                
            </div>
        )
    })

    return (
        <div className="product-list" onMouseEnter={() => props.isShow(true)} onMouseLeave={() => props.isShow(false)}>
            {data}
        </div>
    )
}

export default ProductList