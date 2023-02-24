import React from 'react';
import RogiroAceros from '../Img/RA.png';
import ChapasOroño from '../Img/CO.png';
import JhonsonControl from '../Img/JC.png';
import Better from '../Img/Better.png';
import FvGrif from '../Img/FV.png';
import Inventu from '../Img/Inventu.png';

const Clients = () => {
  return (
    <div
      className='bg-[#0E1527] w-full clients justify-center space-y-12 text-white lg:pt-6 pb-20 pt-10'
      id='Clients'
    >
      <h1 className='text-4xl font-bold ml-9'>Clientes</h1>
      <div className='md:flex justify-evenly items-center'>
        <img src={RogiroAceros} alt='' data-aos="zoom-in-up" data-aos-delay="100"/>
        <img src={ChapasOroño} alt='' data-aos="zoom-in-up" data-aos-delay="200" className='lg:flex hidden'/>
        <img src={JhonsonControl} alt='' data-aos="zoom-in-up" data-aos-delay="300"/>
        <p className='text-4xl italic hidden lg:block'>Desde 1996...</p>
      </div>
      <div className='md:flex justify-evenly items-center'>
        <p className='text-4xl italic hidden lg:block'>Hasta la actualidad</p>
        <img src={Better} alt='' data-aos="zoom-in-up" data-aos-delay="400"/>
        <img src={FvGrif} alt='' data-aos="zoom-in-up" data-aos-delay="500"/>
        <img src={Inventu} alt='' data-aos="zoom-in-up" data-aos-delay="600" className='lg:flex hidden'/>
      </div>
      <div className='text-right mr-20'>
        <button className='bg-[#5DCC97] text-black py-2 px-4 rounded-3xl text-xl font-medium cursor-pointer'>
          Cargar mas...
        </button>
      </div>
    </div>
  );
};

export default Clients;
