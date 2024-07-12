import React from 'react';
import './App.css';
import logo1 from './assets/InstaLogo.png'; 
import logo2 from './assets/PhLogo.jpg'; 
import logo3 from './assets/TwitterLogo.png'; 
import logo4 from './assets/fbLogo.png';
import Services from './Services';

function App() {
  const cards = [
    { title: 'Wedding Photography', description: 'Capturing your special day with timeless elegance and emotion.', image: logo1 },
    { title: 'Headshots', description: 'Professional headshots that make a lasting impression for your career or brand.', image: logo2 },
    { title: 'Photo Editing', description: 'Enhancing and retouching images to perfection, ensuring your photos shine.', image: logo3 },
    { title: 'Event Coverage', description: 'From birthdays to corporate events, we capture every moment with creativity and precision.', image: logo4 },
  ];
  return (
    <div className='App'>
    <h1> OUR SERVICES </h1>
    <div className="app-container">
      
      {cards.map((card, index) => (
        <Services key={index} {...card} />
      ))}
    </div>
    </div>
  );
}

export default App;
