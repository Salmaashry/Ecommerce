import React, { useContext, useState } from 'react';
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { useFormik } from 'formik';
import axios from 'axios';
import { TokenContext } from '../../Context/Token';
import { Helmet } from 'react-helmet';

export default function Login() {


 
  let navigate = useNavigate();
  const [errorMessage,setErrorMessage]= useState("")
  const [isLoading,setISLoading]= useState(false)

  let {setToken} =useContext(TokenContext)
  

 async function CallLogin(reqBody){
   

   setErrorMessage("");
   setISLoading (true)
 let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,reqBody)
 .catch (err =>{
  setISLoading(false)
   setErrorMessage(err.response.data.message)})
 console.log(data)
 if(data.message == "success"){
  localStorage.setItem("userToken", data.token)
  setToken(data.token)
  navigate('/home')
     }
  }
 
const validationSchema = Yup.object({
  email:Yup.string().email("email is not valid").required("email is required"),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"invalid password").required("password is required"),
 });
    const LoginForm= useFormik({
      initialValues:{
      
      email:"",
      password:"",
     
      },
      validationSchema:validationSchema,
      onSubmit:CallLogin 
     })
    
  

  
  return (

<>
    <Helmet>
                <title>Login Page</title>
            </Helmet>
    <div className="w-50 my-5 mx-auto">
      <h4>Login Now :</h4>
    {errorMessage? <div className="alert alert-danger">{errorMessage}</div>:null}  
      <form onSubmit={LoginForm.handleSubmit}>
     
      <div className="form-group mb-2">
        <label htmlFor="email" className="mb-1">Email :</label>
        <input type="email" name="email" id="email"  value={LoginForm.values.email}  className="form-control"  onChange={LoginForm.handleChange} onBlur={LoginForm.handleBlur}/>
        {LoginForm.errors.email && LoginForm.touched.email? ( <div className='alert alert-danger'> {LoginForm.errors.email}</div>):null}

      </div>
      <div className="form-group mb-2">
        <label htmlFor="password" className="mb-1">Password :</label>
        <input type="password" name="password" id="password" value={LoginForm.values.password}  className="form-control"  onChange={LoginForm.handleChange} onBlur={LoginForm.handleBlur}/>
        {LoginForm.errors.password && LoginForm.touched.password?( <div className='alert alert-danger'> {LoginForm.errors.password}</div>):null}

      </div>
    
      <button className="btn bg-main d-block ms-auto text-white">
        {isLoading ? <i className='fa fa-spinner fa-spin'></i>: "Login"}
        
       </button>
     
      </form>

    </div>
    </>
  );
}
