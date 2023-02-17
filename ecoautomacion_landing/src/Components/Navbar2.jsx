import React, { useState, useEffect } from 'react';

function Navbar2() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <nav className={`navbar ${isSticky ? 'fixed' : ''}`}>
      // Coloca aquí los elementos de tu barra de navegación
    </nav>
  );
}

export default Navbar2;
