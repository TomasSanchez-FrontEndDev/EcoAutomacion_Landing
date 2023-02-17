import React from 'react';
import PreNavBar from './Components/PreNavbar';
import Navbar from './Components/NavBar';
import PreHero from './Components/PreHero';
import Hero from './Components/Hero';
import Products from './Components/Products';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import WhatsappIcon from './Components/Whatsapp_Chat';
import Coti from './Components/Cotizacion';

const App = () => {
  return (
    <div className='scrollbar'>
      <WhatsappIcon/>
      <PreNavBar />
      <Navbar />
      <PreHero />
      <Hero />
      <Products />
      <Clients />
      <Footer />
      <Coti />
    </div>
  );
};

export default App;
