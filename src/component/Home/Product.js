import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom'

const options = {
    edit:false,
}

const Product = ({product}) => {
    return (
        <Link className='productCard' to={product._id}>
            <img src={product.images[0].url} />
            <p>{product.name}</p>
            <div>
                <ReactStars {...options} /> <span>(256 Reviews)</span>
            </div>
            <span>{product.price}</span>
        </Link>
    )
}

export default Product
