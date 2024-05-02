
import './App.css';
import React from 'react';
import Header from './components/Header'
import About from './components/About'
import Navigation from './components/Navigation';
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import etchImg from './images/etch-a-sketch.png'
import toDoImg from './images/to-do-list.jpeg'
import bookLibraryImg from './images/book-library.png'



export default function App() {

  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Skills />
      <div className="project-section">Projects</div>
      <div className="project-container">
        <Project 
          imgSrc = {etchImg}
          title="Etch A Sketch"
          description="Experience the nostalgia of the classic Etch A Sketch toy brought to the digital realm with this JavaScript-powered web app. Draw, erase, and save your creations effortlessly"
        />
        <Project 
          imgSrc = {bookLibraryImg}
          title="Book Library"
          description="Explore and manage your book collection seamlessly with the JavaScript book library web app."
        />
        <Project 
          imgSrc = {toDoImg}
          title="To Do List"
          description="Stay organized and productive with a JavaScript-powered to-do list web app. Easily manage tasks, set priorities, and track progress for increased efficiency."
        />
      </div>
      <Contact />
      <Footer />
    </>
  )
  
}

// imgSrc,
//     imgAlt,
//     title,
//     description,
//     demoLink,
//     githubLink