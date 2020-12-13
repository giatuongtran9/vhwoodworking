import React, {useEffect} from 'react'

import './Product.css'

import {productsData } from '../../../../productData'

const Product = (props) => {


    const data = productsData.map((product) => {
        return product.products.filter((data) => data.name === props.productName.productName).map((p) => p.type.map((i) => {
            return (
                <div className="p-container">
                    <h2 className="product-h2">{i.typeName}</h2>
                    {i.image.map((img) => {
                        return (
                            <div className="p1-container">
                                <img className="product-img" src={img.img} alt={img.alt}/>
                                <h5>{img.kind}</h5>
                                <h5>{img.alt}</h5>
                            </div>
                        )
                    })}
                </div>
            )
        }))
    })


    return (
        <div className="product-container">{data}</div>
    )
}

export default Product