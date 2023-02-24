import React from 'react';
import Home from '../Img/Home.png';
import Email from '../Img/Email.png';
import Group from '../Img/Group.png';

const Hero = () => {
  return (
    <div className='md:flex text-white bg-[#0E1527] w-full font-[Ubuntu] justify-between' id='Hero'>
      <div className='w-4/12 ml-6 md:mt-24 md:pt-0 pt-4 flex flex-col justify-between mb-16'>
        <h1 className='text-5xl font-bold border-b-2 border-[#E1FF01] pb-1'>
          NUESTRA FABRICA
        </h1>
        <div className=' space-y-3 py-6 lg:border-r-2 border-[#E1FF01] hidden md:block'>
          <div className='flex items-center'>
            <img src={Email} alt='Email-item' />
            <p className='ml-3'>EcoAutomacion@gmail.com</p>
          </div>
          <div className='flex items-center'>
            <img src={Home} alt='Place-item' />
            <p className='ml-3'>Garay 633 - Rosario - Santa Fe</p>
          </div>
        </div>
      </div>
      <div className='md:w-5/12 md:mt-28 md:mb-6 mr-14 w-full px-4'>
        <img src={Group} alt='' />
        <div className='space-y-3 mt-9 font-bold'>
          <p>
            Somos un equipo de profesionales de la ingeniería, brindando las
            soluciones tecnológicas que demanda la industria.
          </p>
          <p>
            Diseñamos y fabricamos máquinas especiales que resuelven las
            necesidades especificas de nuestros clientes, como así también
            realizamos los trabajos de automatización y modernización de
            procesos industriales en general.
          </p>
          <p>
            Nos especializamos en el conjunto de máquinas vinculadas a la
            transformación del alambre, siendo estas de nuestra fabricación
            Standart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
