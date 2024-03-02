import React from 'react';
import styles from './Footer.module.css'


export default function Footer() {
  return (
   <div className="bg-main-light p-3 mt-3 " >
    <div className="container mt-4">
    <h4>Get The Fresh Cart App</h4>
    <p>We Will send you a Link , Open it in your phone to download the app</p>
    <div className="row">
      <div className="col-md-9 ">
      <input type="email" name="email" className="form-control  ms-3 mb-2 " placeholder='Email..'/>
    </div>
    <div className="col-md-3 ">
      <button className="btn bg-main text-white px-3 ms-3 mt-sm-4 mt-md-0">Share App Link</button>
    </div>
    </div>
    
    <hr className='bg-main-light mt-3' />
      <div>
        <h6>Payment Partner</h6>
      </div>
    </div>
   </div>
  );
}
