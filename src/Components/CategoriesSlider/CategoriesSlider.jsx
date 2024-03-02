import React, { useEffect, useState } from 'react';
import styles from './CategoriesSlider.module.css'
import axios from 'axios';
import Slider from 'react-slick';
import { useQuery } from 'react-query';

export default function CategoriesSlider() {

    function getDataCategory(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    }

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1
      };
 let {data}=  useQuery('categorySlider',getDataCategory)
 


// const [categories ,setCategories]=useState([])

//   async function getCategories(){
//   let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
//    console.log(data);
//    setCategories(data.data)
// }


// useEffect(()=>{
//   getCategories()
// })



return(<>

<div className="container my-5">
  <h2 className="my-3">Show Popular Categories</h2>
  <Slider {...settings}>
    {data?.data.data.map(cat=> <div className="cat px-1">
    <img src={cat.image} height={'180'} className='w-100' alt={cat.name} />
    <h5>{cat.name}</h5>
  </div>)}
  </Slider>
  
</div>
</>)



 }
