import React from 'react';
import styles from './Products.module.css'
import axios from 'axios';
import { useQuery } from 'react-query';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

export default function Products() {
 
//   function showProduct(){
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//   }


//  let {data}= useQuery('ShowProducts',showProduct)
//  console.log(data?.data.data)



 return (
  <>
  
   <div className="container mt-5 pt-5">
    <div className="row gy-5">
       <FeatureProducts />
     
      {/* {data?.data.data.map(show => <div  className="col-md-2 product p-3" >
    <img src={show.imageCover} className="w-100" alt="" />
    <h5 className="text-main fw-bold mt-3">{show.category.name} </h5>
    <h2 className="h6 my-3">{show.title.split(' ').slice(0,2).join(' ')}</h2>
    <div className="d-flex justify-content-between mb-3">
      <span>{show.price} EGP</span>
      <span><i className="fa-solid fa-star rating-color"></i>{show.ratingsAverage}</span>
    </div>

    <button className="btn bg-main w-100 mb-2">Add To Cart</button>
  </div>

      )} */}
    </div>
  </div>
  </>
 )
}
