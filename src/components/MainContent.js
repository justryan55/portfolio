import React from 'react'
import About from './About';
import Navigation from './Navigation';
import Project from './Project';
import Contact from './Contact';
import Bubbles from './Bubbles';
import etchImg from '../images/etch-a-sketch.png';
import toDoImg from '../images/to-do-list.jpeg';
import storeImg from '../images/store.png'
import portfolioImg from '../images/portfolio.png'
import messagingImg from '../images/messaging-app.png'
import bookLibraryImg from '../images/book-library.png';
import { NavigationMobile } from './NavigationMobile';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';


export default function MainContent() {
      const isMobile = useMediaQuery({ maxWidth: 768 })
    return (
        <div className='main-content'>
          {isMobile ? <NavigationMobile /> : <Navigation />}
          <Bubbles />
          <About />
          <Bubbles />
          <div id='projects' className="project-section">Projects</div>
          <div className="project-container">
          <Project 
              imgSrc={messagingImg}
              title="Umbrella Talk"
              description="Full Stack Messaging Service - Under Development."
              githubLink="https://github.com/justryan55/umbrella-talk"
            
            />
            <Project 
              imgSrc={storeImg}
              title="Online Store"
              description="Online Clothes Store - Under Development."
              githubLink="https://github.com/justryan55/shopping-cart"
            
            />
            <Project 
              imgSrc={portfolioImg}
              title="This Portfolio"
              description="A React-built portfolio that highlights my journey and showcases my projects."
              githubLink="https://github.com/justryan55/portfolio"
            />
            <Project 
              imgSrc={etchImg}
              title="Etch A Sketch"
              description="Experience the nostalgia of the classic Etch A Sketch toy brought to the digital realm with this JavaScript-powered web app."
              demoLink="/etch-a-sketch"
              githubLink="https://github.com/justryan55/etch-a-sketch"
            />
            <Project 
              imgSrc={bookLibraryImg}
              title="Book Library"
              description="Explore and manage your book collection with the JavaScript book library web app."
              demoLink="/library"
              githubLink="https://github.com/justryan55/book-library"
            />
            <Project 
              imgSrc={toDoImg}
              title="To Do List"
              description="Stay organized and productive with a JavaScript-powered to-do list web app."
              demoLink="/to-do-list"
              githubLink="https://github.com/justryan55/to-do-list"
            />
          </div>
          {/* <Bubbles /> */}
          <div id='contact' className='contact-section'>
            <Contact />
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      );
    
}
