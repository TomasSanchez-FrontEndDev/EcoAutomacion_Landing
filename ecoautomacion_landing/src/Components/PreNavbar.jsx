import React from 'react';
import logo from '../Img/Logo.png'
import Phone from '../Img/Phone.png'
import Place from '../Img/Place.png'

const PreNavbar = () => {
  return (
    <div className='w-full bg-[#0E1527] flex justify-between px-2 text-white py-10 items-center font-[Ubuntu]'>
      <img src={logo} alt='Logo' className='max-h-[6.25rem] ml-12'/>
      <div className='flex space-x-[7rem]'>
        <div className='flex'>
          <img src={Phone} alt='' className='max-h-[3.375rem]'/>
          <div className='ml-2'>
            <a href="tel:4810817"> <p>Tel: 4810817 </p> </a> 
           <a href="tel:3416294587"> <p>Cel: +54 341 629-4587 </p> </a> 
          </div>
        </div>
        <div className='flex'>
          <img src={Place} alt='' />
          <div className='ml-2 mr-20'>
            <p>Garay 633</p>
            <p>Rosario-Santa Fe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreNavbar;
