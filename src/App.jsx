import { useState } from 'react';
import Home from './Pages/Home-Page/Home-main'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop-Page/Shop-main';
import SidebarProvider from './context/SidebarContext';

function App() {


  return (
    <SidebarProvider>
      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />




      </Routes>
    </SidebarProvider>
  )
}

export default App
