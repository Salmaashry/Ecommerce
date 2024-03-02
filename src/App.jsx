
import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import Brands from './Components/Brands/Brands';
import Carts from './Components/Carts/Carts';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';

import Register from './Components/Register/Register';
import Footer from './Components/Footer/Footer';
import LogOut from './Components/LogOut/LogOut';
 import TokenContextProvider, { TokenContext } from './Context/Token';
 import { useContext, useEffect } from 'react';
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes';
import ProductsDetails from './Components/ProductsDetails/ProductsDetails';



function App() {

  let {setToken}=useContext(TokenContext)

  const routes= createBrowserRouter ([
    {path :"",element: <LayOut /> ,children: [
      {path:"home" , element:<ProtectedRoutes><Home /></ProtectedRoutes>  } ,
      {path :"brands" , element:<ProtectedRoutes><Brands /></ProtectedRoutes> } ,
      {path :"carts" , element:<ProtectedRoutes><Carts /> </ProtectedRoutes> } ,
    {path : "footer" , element :<ProtectedRoutes> <Footer /></ProtectedRoutes>} ,
    {path : "navbar" , element :<ProtectedRoutes> <NavBar /></ProtectedRoutes>} ,
    {path : "*" , element : <NotFound />} ,
    {path : "products" , element :<ProtectedRoutes> <Products /> {" "}</ProtectedRoutes> } ,
     {path:"details" ,element:<ProtectedRoutes><ProductsDetails/>  {" "} </ProtectedRoutes>},
    {path : "categories" , element :<ProtectedRoutes><Categories /> </ProtectedRoutes>  } ,


    {path : "login" , element :<Login /> } ,
    {path : "register" , element :<Register />},
    {path : "logout" , element : <LogOut />},
   




    ] }
  ])

  useEffect(()=>{
    if(localStorage.getItem("userToken")!=null){
      setToken(localStorage.getItem("userToken"))
    }
  },[])
  return (
  

    <RouterProvider  router={routes}></RouterProvider>

   
  
   
    
       
          

 
  );
}

export default App;
