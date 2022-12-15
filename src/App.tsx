
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accessary from './components/Accessary';
import Digital from './components/Digital';
import Fashion from './components/Fashion';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Product from './components/Product';
import React from 'react';
import Cart from './components/Cart';
function App() {
  return (
      <RecoilRoot>
        <React.Suspense fallback={<div className=" m-auto flex items-center justify-center">Loading...</div>}>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/fashion' element={<Fashion/>}/>
                <Route path='/digital' element={<Digital/>}/>
                <Route path='/acc' element={<Accessary/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/product/:id' element={<Product/>}/>
            </Routes>
            <Footer/>
         </BrowserRouter>
         </React.Suspense>
      </RecoilRoot>
  )
}

export default App
