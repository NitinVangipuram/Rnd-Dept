import React, { useState, useEffect } from 'react';

const CustomCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const length = images.length;

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + length) % length);
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrev();
    }
  };

  return (
    <div 
      className="relative rounded-lg overflow-hidden shadow-md max-w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel wrapper */}
      <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
              style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-2 sm:space-x-3 rtl:space-x-reverse bottom-4 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-300'}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Slider controls - hidden on very small screens */}
      <button
        type="button"
        className="hidden sm:flex absolute top-0 left-0 z-30 items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 1L1 5l4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="hidden sm:flex absolute top-0 right-0 z-30 items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-2 group-focus:ring-white">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 9l4-4-4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default CustomCarousel;
