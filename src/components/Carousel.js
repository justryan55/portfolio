import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CSS from '../images/css3-original.svg';
import HTML from '../images/html5-original.svg';
import JS from '../images/javascript-original.svg';
import ReactImg from '../images/react-original.svg';
import Node from '../images/nodejs-original-wordmark.svg';



export default function ResponsiveCarousel() {
  return (
    <Carousel className='crsl' 
              autoPlay 
              infiniteLoop={true}
              interval={2500}
              dynamicHeight={true}
              emulateTouch={true}
              showArrows={false}
              showIndicators={false}
              transitionTime={2000}
              showThumbs={false}
              showStatus={false}
              centerMode
              centerSlidePercentage={33.33}
              >
        <div>
            <img src={CSS} alt="CSS" />
        </div>
        <div>
            <img src={HTML} alt="HTML" />
        </div>
        <div>
            <img src={JS} alt="Javascript" />
        </div>
        <div>
            <img src={ReactImg} alt="React" />
        </div>
        <div>
            <img src={Node} alt="Node.js" />
        </div>
        <div>
            <img src={CSS} alt="CSS" />
        </div>
        <div>
            <img src={HTML} alt="HTML" />
        </div>
        <div>
            <img src={JS} alt="Javascript" />
        </div>
        <div>
            <img src={ReactImg} alt="React" />
        </div>
        <div>
            <img src={Node} alt="Node.js" />
        </div>
        <div>
            <img src={CSS} alt="CSS" />
        </div>
        <div>
            <img src={HTML} alt="HTML" />
        </div>
        <div>
            <img src={JS} alt="Javascript" />
        </div>
        <div>
            <img src={ReactImg} alt="React" />
        </div>
        <div>
            <img src={Node} alt="Node.js" />
        </div>
        <div>
            <img src={CSS} alt="CSS" />
        </div>
        <div>
            <img src={HTML} alt="HTML" />
        </div>
        <div>
            <img src={JS} alt="Javascript" />
        </div>
        <div>
            <img src={ReactImg} alt="React" />
        </div>
        <div>
            <img src={Node} alt="Node.js" />
        </div>
    </Carousel>
  )
}

  

