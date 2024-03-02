import React, { useEffect, useState } from 'react';
import styles from './FeatureProducts.module.css'
import axios from 'axios';
import ProductItem from '../ProductItem/ProductItem';

export default function FeatureProducts() {


  let [allProducts ,setAllProducts]=useState([])
  async function getAllProduct(){
  let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  console.log(data);
  setAllProducts(data.data)

  }


  useEffect(()=>{
    getAllProduct()
     },[])


 return <> 
  <div className="container">
    <div className="row gy-5">

     
      {allProducts.map(product => <ProductItem  product={product}/>
      )}
    </div>
  </div>
  </>
 
 
 

}
