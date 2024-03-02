import React from 'react';
import styles from './ProductItem.module.css'
import { Link } from 'react-router-dom';

export default function ProductItem({product}) {
  return (
    <Link to="details" className="col-md-2 product p-3" >
    <img src={product.imageCover} className="w-100" alt="" />
    <h5 className="text-main fw-bold mt-3">{product.category.name} </h5>
    <h2 className="h6 my-3">{product.title.split(' ').slice(0,2).join(' ')}</h2>
    <div className="d-flex justify-content-between mb-3">
      <span>{product.price} EGP</span>
      <span><i className="fa-solid fa-star rating-color"></i>{product.ratingsAverage}</span>
    </div>

    <button className="btn bg-main w-100 mb-2">Add To Cart</button>
  </Link>
  )
}
