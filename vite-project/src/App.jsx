import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
