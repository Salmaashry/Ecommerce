import React from 'react'
import Carts from '../Carts/Carts'
import Categories from '../Categories/Categories'
import MainSlider from '../MainSlider/MainSlider'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import { Helmet } from 'react-helmet'
import { ClipLoader } from 'react-spinners'
import FeatureProducts from '../FeatureProducts/FeatureProducts'

export default function Home() {
  return (
   <>

   <MainSlider/> 
   <CategoriesSlider />
    <FeatureProducts/>

   </>

  )
}
