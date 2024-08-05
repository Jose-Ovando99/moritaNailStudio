// src/Gallery.js

import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import img1 from "../assets/moritaCover.jpg";
import img2 from "../assets/pr1.png";
import img3 from "../assets/test-2.jpg";

const Gallery = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 rounded-full z-10"
        onClick={goToPrevious}
      >
        &lt;
      </button>
      <div
        className="relative w-full h-64 overflow-hidden"
        {...handlers}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 w-10 rounded-full z-10"
        onClick={goToNext}
      >
        &gt;
      </button>
    </div>
  );
};

export default Gallery;
