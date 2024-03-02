import React, { useContext } from 'react';
import styles from './NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../Assests/images/freshcart-logo.svg'
import { CounterContext } from '../../Context/Counter';
import { TokenContext } from '../../Context/Token';


export default function NavBar() {
let {counter} =useContext(CounterContext)


let {token,setToken} =useContext(TokenContext)

let navigate=useNavigate()

function logOut(){
  localStorage.removeItem("userToken")
  setToken(null)
  navigate("/login")
}




// function LogOut(){
//   localStorage.removeItem("userToken")
//   setToken(null);
//   navigate ("/login")
// }

  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 ">
  <div className="container">
    <Link className="navbar-brand" to={''}> <img src={imgLogo} className="w-100" alt='Logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
     {token?  <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
      <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'home'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'brands'}>Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'products'}>Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'categories'}>Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'carts'}>Carts</Link>
        </li>
     
        </ul>
   :null }
     
    
     

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item align-self-center  ">
       <div>
  <i className="fa-brands mx-1 fa-instagram" />
  <i className="fa-brands mx-1 fa-facebook" />
  <i className="fa-brands mx-1 fa-tiktok" />
  <i className="fa-brands mx-1 fa-twitter" />
  <i className="fa-brands mx-1 fa-linkedin" />
  <i className="fa-brands mx-1 fa-youtube" />
</div>

        </li>
     {token?<li className="nav-item">
          <button className="nav-link " onClick={logOut}>LogOut</button>
      </li>: <>
       <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'register'}>Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={'login'}>Login</Link>
      </li></>}
         
         
       

      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
