import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'





export default function Register() {
  let navigate = useNavigate();
  const [errorMessage,setErrorMessage]= useState("")
  const [isLoading,setISLoading]= useState(false)

  

 async function CallRegisrer(reqBody){
   console.log(reqBody);

   setErrorMessage("");
   setISLoading (true)
 let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,reqBody)
 .catch (err =>{
  setISLoading(false)
   setErrorMessage(err.response.data.message)})
 console.log(data)
 if(data.message == "success"){
  navigate('/Login')
     }
  }
 
const validationSchema = Yup.object({
  name:Yup.string().min(3,"name is too short").max(15,"name is too long").required("Name is required"),
  email:Yup.string().email("email is not valid").required("email is required"),
  password:Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/,"invalid password").required("password is required"),
  rePassword:Yup.string().oneOf([Yup.ref('password')],"password and rePassword should be match").required("password is required"),
  phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"invalid phoneNumber").required("PhoneNumber is required"),
});
    const regisertForm= useFormik({
      initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
      },
      validationSchema:validationSchema,
      onSubmit:CallRegisrer ,
     })
    
  

  
  return (
    <div className="w-50 my-5 mx-auto">
      <h4>Register Now :</h4>
    {errorMessage? <div className="alert alert-danger">{errorMessage}</div>:null}  
      <form onSubmit={regisertForm.handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="fullname" className="mb-1">Full Name :</label>
        <input type="text" name="name"  id="fullname" value={regisertForm.values.name} className="form-control" onChange={regisertForm.handleChange} onBlur={regisertForm.handleBlur}/>
        {regisertForm.errors.name && regisertForm.touched.name? (<div className='alert alert-danger'>{""} {regisertForm.errors.name}</div>):null}
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email" className="mb-1">Email :</label>
        <input type="email" name="email" id="email"  value={regisertForm.values.email}  className="form-control"  onChange={regisertForm.handleChange} onBlur={regisertForm.handleBlur}/>
        {regisertForm.errors.email && regisertForm.touched.email? ( <div className='alert alert-danger'> {regisertForm.errors.email}</div>):null}

      </div>
      <div className="form-group mb-2">
        <label htmlFor="password" className="mb-1">Password :</label>
        <input type="password" name="password" id="password" value={regisertForm.values.password}  className="form-control"  onChange={regisertForm.handleChange} onBlur={regisertForm.handleBlur}/>
        {regisertForm.errors.password && regisertForm.touched.password?( <div className='alert alert-danger'> {regisertForm.errors.password}</div>):null}

      </div>
      <div className="form-group mb-2">
        <label htmlFor="rePassword" className="mb-1">RePassword :</label>
        <input type="password" name="rePassword" id="rePassword" value={regisertForm.values.rePassword}  className="form-control"  onChange={regisertForm.handleChange} onBlur={regisertForm.handleBlur}/>
        {regisertForm.errors.rePassword && regisertForm.touched.rePassword?( <div className='alert alert-danger'> {regisertForm.errors.rePassword}</div>):null}

      </div>
      <div className="form-group mb-2">
        <label htmlFor="phone" className="mb-1">Phone :</label>
        <input type="tel" name="phone" id="phone" value={regisertForm.values.phone}  className="form-control"  onChange={regisertForm.handleChange} onBlur={regisertForm.handleBlur} />
        {regisertForm.errors.phone && regisertForm.touched.phone? (<div className='alert alert-danger'> {regisertForm.errors.phone}</div>):null}

      </div>
      <button className="btn bg-main d-block ms-auto text-white " disabled={!(regisertForm.isValid  && regisertForm.dirty)}>
        {isLoading ? <i className='fa fa-spinner fa-spin'></i>: "Register"}
        
       </button>
     
      </form>

    </div>
  );
  
}

