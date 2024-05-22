import React from 'react'
import About from './About';
import Navigation from './Navigation';
import Project from './Project';
import Contact from './Contact';
import Bubbles from './Bubbles';
import etchImg from '../images/etch-a-sketch.png';
import toDoImg from '../images/to-do-list.jpeg';
import bookLibraryImg from '../images/book-library.png';

export default function MainContent() {
    return (
        <div className='main-content'>
          <Navigation />
          <Bubbles />
          <About />
          <Bubbles />
          <Bubbles />
          <div className="project-section">Projects</div>
          <div className="project-container">
            <Project 
              imgSrc={etchImg}
              title="Etch A Sketch"
              description="Experience the nostalgia of the classic Etch A Sketch toy brought to the digital realm with this JavaScript-powered web app. Draw, erase, and save your creations effortlessly."
              demoLink="/etch-a-sketch"
            />
            <Project 
              imgSrc={bookLibraryImg}
              title="Book Library"
              description="Explore and manage your book collection seamlessly with the JavaScript book library web app."
              demoLink="/library"
            />
            <Project 
              imgSrc={toDoImg}
              title="To Do List"
              description="Stay organized and productive with a JavaScript-powered to-do list web app. Easily manage tasks, set priorities, and track progress for increased efficiency."
              demoLink="/to-do-list"
            />
          </div>
          {/* <Bubbles /> */}
          <div className='contact-section'>
            <Contact />
          </div>
        </div>
      );
    
}
