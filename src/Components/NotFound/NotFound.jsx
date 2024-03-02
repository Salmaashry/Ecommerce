import React from 'react';
import styles from './NotFound.module.css'
import imgerror from '../../Assests/images/error.svg'

export default function NotFound() {
  return (
    <div className='container my-5 text-center'>
      <img src={imgerror} className="w-75" alt=''/> </div>
  )
}
