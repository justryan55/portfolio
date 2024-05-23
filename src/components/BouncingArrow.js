import React, { useState, useEffect } from 'react';
import arrowImg from '../images/arrow-down.svg';

const BouncingArrow = () => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const newOpacity = scrollTop > 200 ? 0 : 1;
        setOpacity(newOpacity);
  };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className='arrow' style={{ opacity }}>
          <img src={arrowImg} alt='arrow' className='arrow' />
      </div>
  );
};

export default BouncingArrow