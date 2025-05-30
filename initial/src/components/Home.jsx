import React from 'react';
import Carousel from './Carousel';

function Home() {
  return (
    <main>
      <div className="content-section">
        <h1 className="department-title">Department of Computer Science</h1>
        <h2 className="sub-title">Indian Institute of Technology Dharwad</h2>
        {/* <img
          src="https://via.placeholder.com/1200x500?text=Campus+Image"
          alt="IIT Dharwad Campus"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        /> */}
        <Carousel />
        <div className="welcome-section">
          <p>
            Welcome to the Department of Computer Science at IIT Dharwad. Explore our cutting-edge research, innovative programs, and talented faculty.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;