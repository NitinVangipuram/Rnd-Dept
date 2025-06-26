import React from 'react';
import './Funding_statistics.css'


import pdf3 from '../assets/i3.png';

export default function Statsofpublications() {
  const pdfs = [ pdf3];

  return (
    <div className='statistics'>
      
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center"> Publications Statistics</h1>
       {pdfs.map((pdf, index) => (
        <section key={index} style={{ marginBottom: '2rem' }}>
          <img src={pdf} alt="" className='images' />
        </section>
      ))}
    </div>
  );
}
