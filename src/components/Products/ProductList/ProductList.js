import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {getcurrentUser } from '../../../services/auth.service'

import apiUrl from '../../../api'

import './ProductList.css'

const ProductList = (props) => {

    const user = getcurrentUser()
    const url = `${apiUrl}/products`

    const [d, setD] = useState([])

    useEffect(() => {
        axios.get(url).then(res => setD(res.data))
    }, [])

    console.log(d)

    const data = d.map((product) => {
        return (
            (product.productName === 'Door' || product.productName === 'Counter Top' ? <div className="list-container">
                <Link to={`/product/${product.productName}`} onClick={() =>  props.isShow(false)} className='product-h1-a'>{product.productName}</Link>
                {product.products.map((p) => {
                    return (
                        <ul>
                            <li><Link to={`/product/${product.productName}/${p.name}`} onClick={() =>  props.isShow(false)} className="product-li">{p.name}</Link></li>
                        </ul>
                    )
                })}
            </div> 
            : 
            <div className="list-container">
                {product.products.map((p) => {
                    return (
                        <Link to={`/product/${product.productName}/${p.name}`} onClick={() =>  props.isShow(false)} className="product-h1">{product.productName}</Link>
                    )
                })}
            </div>)
        )
    })

    return (
        <div className="product-list" onMouseEnter={() => props.isShow(true)} onMouseLeave={() => props.isShow(false)} >
            {user && user.role === 'admin' ? <Link to="/addform" className="product-h1">Add Product</Link> : ''}
            {data}
        </div>
    )
}

export default ProductList