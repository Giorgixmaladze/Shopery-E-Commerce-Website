import { useState } from 'react'
import Navigation from './Components/navigation/Navigation'
import Home from './Components/Home-Page/Home-main'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop-Page/Shop-main'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Shop' element = {<Shop />} />
      
    </Routes>
    
  )
}

export default App
