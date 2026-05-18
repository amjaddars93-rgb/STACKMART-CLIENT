import React from 'react'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from './components/About'
// import Navbar from './components/Navbar'
import AddToCart from './components/AddToCart'
import UserRegistation from './components/UserRegistation'
import Contactus from './components/Contactus'
import UserLogin from './components/UserLogin'
import ViewDetailsProducts from './components/ViewDetailsProducts'
import Products from './components/Products'
import UserLayout from './components/UserLayout'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import AdminLayout from './admins/AdminLayout'
import AdminDashboard from './admins/AdminDashboard'
import AdminProduct from './admins/AdminProduct'
import ProductAdd from './admins/ProductAdd'
import AdminEditProduct from './admins/ProductEdit'




const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        
     <Route path='/' element={<UserLayout/>}>

        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/addtocart' element={<AddToCart />} />
        <Route path='/userRegister' element={<UserRegistation />} />
       <Route path='/viewdetailsproducts/:id' element={<ViewDetailsProducts />} />
        <Route path='/userLogin' element={<UserLogin />} />

 
   
</Route>

<Route path="/admin" element={
  <ProtectedAdminRoute>
    <AdminLayout />
  </ProtectedAdminRoute>
}>
  <Route index element={<AdminDashboard />} />
  <Route path="products" element={<AdminProduct />} />
  <Route path="add-product" element={<ProductAdd />} />
  <Route path="edit/:id" element={<AdminEditProduct />} />  {/* ← Add this */}
</Route>


      </Routes>
      
    </BrowserRouter>
  )
}

export default App