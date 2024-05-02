
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import About from './components/About'




export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </BrowserRouter>
    </>
  )
  
}
