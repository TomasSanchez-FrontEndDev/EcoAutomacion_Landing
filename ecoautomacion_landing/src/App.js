import React from 'react';
import PreNavBar from './Components/PreNavbar';
import Navbar from './Components/NavBar';
import PreHero from './Components/PreHero';
import Hero from './Components/Hero';

const App = () => {
  return (
    <div>
      <PreNavBar />
      <Navbar />
      <PreHero />
      <Hero />
    </div>
  );
};

export default App;