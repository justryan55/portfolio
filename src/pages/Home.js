import '../App.css';
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent';
import Bubbles from '../components/Bubbles';
export default function App() {

  return (
    <div className='app'>
      <Bubbles />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
    
  }