import React from 'react';
import './Funding_statistics.css'
import AltCarousel from '../components/Carousel/AltCarousel';
import pdf2 from '../assets/i10.jpg';
import pdf3 from '../assets/i11.jpg';

export default function Office_statistics() {
  const images = [pdf2,pdf3];

  return (
    <div className='statistics'>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Office Statistics</h1>
       
        <AltCarousel  images={images} />
      
    </div>
  );
}
