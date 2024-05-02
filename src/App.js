
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from './pages/Home'
import EtchASketch from './pages/Etch-a-sketch'
import Library from './pages/Book-library'
import Header from './components/Header'
import About from './components/About'
import Navigation from './components/Navigation';
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'



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
