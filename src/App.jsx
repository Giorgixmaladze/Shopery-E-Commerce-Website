import { useState } from 'react';
import Home from './Pages/Home-Page/Home-main'
import { Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop-Page/Shop-main';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Shop' element = {<Shop />} />
      
    </Routes>
    
  )
}

export default App
