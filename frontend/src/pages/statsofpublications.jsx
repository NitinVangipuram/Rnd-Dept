import React from 'react';
import './Funding_statistics.css'
import AltCarousel from '../components/Carousel/AltCarousel';

import pdf3 from '../assets/i3.png';

export default function Statsofpublications() {
  const pdfs = [ pdf3];

  return (
    <div className='statistics'>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center"> Publications Statistics</h1>
      <AltCarousel images={pdfs}/>
    </div>
  );
}
