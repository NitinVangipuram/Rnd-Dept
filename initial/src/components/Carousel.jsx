import React, { useState, useEffect } from 'react';
import './Carousel.css';

const importImages = import.meta.glob('../assets/carousel-images/*.{png,jpg,jpeg,gif}', {
  eager: true,
});

const images = Object.values(importImages).map((module) => module.default);

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (images.length > 0 && isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  if (images.length === 0) {
    return <div className="carousel-empty">No images found</div>;
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        ←
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="carousel-button next" onClick={goToNext}>
        →
      </button>
    </div>
  );
}

export default Carousel;