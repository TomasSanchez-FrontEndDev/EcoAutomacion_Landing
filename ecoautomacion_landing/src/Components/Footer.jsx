import React from 'react';
import Home from '../Img/Home.png';
import Mail from '../Img/Email.png';
import Place from '../Img/PlaceMap.png';

const Footer = () => {
  return (
    <div
      className='bg-gradient-to-b from-[#0E1527] to-[#5DCC97] w-full md:flex justify-evenly items-center text-center md:pb-5'
      id='Footer'
    >
      <div className='space-y-4 text-white order-2 md:order-1 pb-5 lg:pb-0'>
        <div className='flex items-center'>
          <img src={Mail} alt='' />
          <p className='ml-2'>EcoAutomacion@gmail.com</p>
        </div>
        <div className='flex items-center'>
          <img src={Home} alt='' />
          <p className='ml-2'>+54 341 338-7124</p>
        </div>
        <div className='flex items-center'>
          <img src={Place} alt='' />
          <div className='ml-2'>
            <p>Garay 633</p>
            <p>Rosario-Santa Fe</p>
          </div>
        </div>
      </div>

      <div id='maps' className='hidden md:block'>
        <div class='mapouter items-center flex justify-center order-1 md:order-2'>
          <div class='gmap_canvas border-2 border-green-800'>
            <iframe
              width={500}
              height={500}
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=Garay%20633&t=&z=15&ie=UTF8&iwloc=&output=embed'
              frameborder='0'
              scrolling='no'
              marginheight='0'
              marginwidth='0'
            ></iframe>
            <a href='https://www.embedgooglemap.net'></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
