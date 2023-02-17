import React from 'react';
import RogiroAceros from '../Img/RA.png';
import ChapasOroño from '../Img/CO.png';
import JhonsonControl from '../Img/JC.png';
import Better from '../Img/Better.png';
import FvGrif from '../Img/FV.png';
import Inventu from '../Img/Inventu.png';

const Clients = () => {
  return (
    <div className='bg-[#0E1527] w-full clients justify-center space-y-12 text-white pt-6 pb-20'>
      <h1 className='text-4xl font-bold ml-9'>Clientes</h1>
      <div className='flex justify-evenly items-center'>
        <img src={RogiroAceros} alt=''/>
        <img src={ChapasOroño} alt='' />
        <img src={JhonsonControl} alt='' />
        <p className='text-4xl italic'>Desde 1996...</p>
      </div>
      <div className='flex justify-evenly items-center'>
        <p className='text-4xl italic'>Hasta la actualidad</p>
        <img src={Better} alt='' />
        <img src={FvGrif} alt='' />
        <img src={Inventu} alt='' />
      </div>
      <div className='text-right mr-20'>
        <button className='bg-[#5DCC97] text-black py-2 px-4 rounded-3xl text-xl font-medium'>Cargar mas...</button>
      </div>
    </div>
  );
};

export default Clients;
