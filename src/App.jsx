import { useState } from 'react';
import Home from './Pages/Home-Page/Home-main'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop-Page/Shop-main';
import SidebarProvider from './context/SidebarContext';
import Signup from './Pages/SignUp-Page/SignUp';

function App() {


  return (
    <SidebarProvider>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path="/signup" element={<Signup />} />



      </Routes>
    </SidebarProvider>
  )
}

export default App
