import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CoverLetter from './components/CoverLetter'
import CV from './components/CV'
import Mydocument from './components/Mydocument'
import CreateCV from './components/CreateCV'
import { useLocation } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const location = useLocation()

  return (
    <div>

      {location.pathname === '/mydocument' ? null : <Navbar></Navbar>}

      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='cv' element={<CV></CV>}></Route>
        <Route exact path='coverletter' element={<CoverLetter></CoverLetter>}></Route>
        <Route exact path='mydocument' element={<Mydocument></Mydocument>}></Route>
        <Route exact path='create' element={<CreateCV></CreateCV>}></Route>
      </Routes>

    </div>

  )
}

export default App
