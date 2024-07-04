import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/navbar/Navbar';
import Home from './page/Home';
import Toyshop from './page/Toyshop';
import Tutorial from './page/Tutorial';
import Community from './page/Community';
import Footer from './component/footer/Footer';
import LoginPage from './component/loginpopup/LoginPage';
import Carousel from './component/slider/Carousel';
import Testimonial from './component/slider/Testimonial';


export default function App() {

const [showLogin, setShowLogin] = useState(false);

  return (
      <>
      {showLogin?<LoginPage setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar
        setShowLogin ={setShowLogin}
      />
       <Routes>
       <Route index element={<Home />} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/toyshop" element={<Toyshop />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/community" element={<Community />} />
          <Route path="/Carousel" element={<Carousel/>} />
          <Route path="/Testimonial" element={<Testimonial/>} />
          <Route path="/Login"element={<LoginPage/>}/>                     
      </Routes>
   
    </div>
    <Footer/>
    </>
  )
}




 