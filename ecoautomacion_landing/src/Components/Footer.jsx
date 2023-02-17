import React from 'react';
import Home from '../Img/Home.png';
import Mail from '../Img/Email.png';
import Place from '../Img/PlaceMap.png';
import ExampleMap from '../Img/Ejemplo.png'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-[#0E1527] to-[#5DCC97] w-full pt-32 pb-28 flex justify-evenly items-center' id='Footer'>
      <div className='space-y-4 text-white'>
        <div className='flex items-center'>
          <img src={Mail} alt='' />
          <p className='ml-2'>EcoAutomacion@gmail.com</p>
        </div>
        <div className='flex items-center'>
          <img src={Home} alt=''/>
          <p className='ml-2'>+54 341-6294587</p>
        </div>
        <div className='flex items-center'>
          <img src={Place} alt='' />
          <div className='ml-2'>
            <p>Garay 633</p>
            <p>Rosario-Santa Fe</p>
          </div>
        </div>
      </div>
      <div id='maps'>
        <img src={ExampleMap} alt="" />
      </div>
    </div>
  );
};

export default Footer;
