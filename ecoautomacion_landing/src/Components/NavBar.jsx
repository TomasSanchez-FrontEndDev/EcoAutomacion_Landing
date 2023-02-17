import React from 'react';

const navbar = document.getElementById('Navigation');

const NavBar = () => {
  return (
    <div
      className='{`navbar ${isSticky ? "NavBar" : ""}`} w-full bg-[#0C1221] h-12 font-[Ubuntu] top-30'
      id='Navigation'
    >
      <ul className='flex justify-between px-6 text-white h-full items-center w-full'>
        <li>
          <a href='#Home'>HOME</a>
        </li>
        <li>
          <a href='#Hero'>INSTITUCIONAL</a>
        </li>
        <li>
          <a href='#Products'>PRODUCTOS</a>
        </li>
        <li>
          <a href='#Services'>SERVICIOS</a>
        </li>
        <li>
          <a href='#Clients'>CLIENTES</a>
        </li>
        <li>
          <a href='#Footer'>CONTACTO</a>
        </li>
      </ul>
    </div>
  );
};

const navscroll = () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};

export default NavBar;
