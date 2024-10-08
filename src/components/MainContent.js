import React from "react";
import About from "./About";
import Navigation from "./Navigation";
import Project from "./Project";
import Contact from "./Contact";
import Bubbles from "./Bubbles";
import etchImg from "../images/etch-a-sketch.png";
import toDoImg from "../images/to-do-list.jpeg";
import storeImg from "../images/store.png";
import portfolioImg from "../images/portfolio.png";
import messagingImg from "../images/messaging-app.png";
import globeTrotterImg from "../images/globe-trotter.png";
import bookLibraryImg from "../images/book-library.png";
import activeHorizonsImg from "../images/active-horizons.png";
import { NavigationMobile } from "./NavigationMobile";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

export default function MainContent() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="main-content">
      {isMobile ? <NavigationMobile /> : <Navigation />}
      <Bubbles />
      <About />
      <Bubbles />
      <div id="projects" className="project-section">
        Projects
      </div>
      <div className="project-container">
        <Project
          imgSrc={globeTrotterImg}
          title="GlobeTrotter"
          description="Full Stack Social Media Site developed with the MERN stack, allowing users to create posts, like and comment on posts, explore google maps, identify the number of countries they have visited and follow other users."
          demoLink="https://travel-project-eight-phi.vercel.app/"
          target="_blank"
          githubLink="https://github.com/justryan55/travel-project"
        />

        <Project
          imgSrc={messagingImg}
          title="Umbrella Talk"
          description="Full Stack Messaging Service developed with the MERN stack, allowing users to edit and delete messages, clear conversation history, update profile pictures, and delete their accounts."
          demoLink="https://umbrella-talk-api-zeta.vercel.app/"
          target="_blank"
          githubLink="https://github.com/justryan55/umbrella-talk"
        />

        <Project
          imgSrc={activeHorizonsImg}
          title="Active Horizons Health Group"
          description="A responsive business page for a physiotherapy telehealth provider."
          demoLink="https://activehorizons.com.au"
          target="_blank"
          githubLink="https://github.com/justryan55/active-horizons"
        />
        <Project
          imgSrc={storeImg}
          title="Online Store"
          description="Online Clothes Store to demonstrate use of state. Not responsive."
          demoLink="https://ritzythreads.netlify.app/"
          target="_blank"
          githubLink="https://github.com/justryan55/shopping-cart"
        />
        <Project
          imgSrc={portfolioImg}
          title="My Portfolio"
          description="A React-built portfolio that highlights my journey and showcases my projects."
          demoLink="/"
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
          description="Stay organised and productive with a JavaScript-powered to-do list web app."
          demoLink="/to-do-list"
          githubLink="https://github.com/justryan55/to-do-list"
        />
      </div>
      {/* <Bubbles /> */}
      <div id="contact" className="contact-section">
        <Contact />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
