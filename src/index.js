// import config, {age,work} from './test/config'
// console.log(config.age)
// console.log(age)
// work()

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Index from './pages/Index'
import Login from './pages/Login'
import News from './pages/News'
import NewsDetails from './pages/NewsDetails'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import ProductDetails from './pages/ProductDetails'
import Register from './pages/Register'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // react-router-dom模块提供的路由系统：路由器>路由词典>路由*N
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/about' element={<About />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/news' element={<News />} />
      <Route path='/news_details' element={<NewsDetails />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product_details' element={<ProductDetails />} />
      <Route path='/register' element={<Register />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
)
