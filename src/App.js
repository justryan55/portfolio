
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import EtchASketch from './pages/Etch-a-sketch'


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/etch-a-sketch" element={<EtchASketch />} />
        </Routes>
      </BrowserRouter>
    </>
  )
  
}
