import React, { useState, useEffect } from 'react';
import Estandar from '../Components/SubComponents/ProductsListEstandar';
import Especial from '../Components/SubComponents/ProductsListSpecial';

const Products = () => {
  return (
    <div
      className= 'flex bg-gradient-to-b from-[#0E1527] via-[#5DCC97] to-[#0E1527] text-white w-full justify-between h-full'
      id='Products'
    >
      <div className='top-0 ml-4 left-0 sticky'>
        <h1 className='text-4xl font-bold'>Productos</h1>
        <ul className='mt-4 space-y-3 ml-14 border-l-2 border-[#E1FF01] pl-3'>
          <li>
            <a href='#Standar1' className='text-3xl'>
              Estandar
            </a>
          </li>
          <li>
            <a href='#Special1' className='text-3xl' id='style-4'>
              Especiales
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h1 className='text-4xl font-bold mt-2' id='Standar1'>
          ESTANDAR
        </h1>
        <Estandar />
        <h1 className='text-4xl font-bold mt-2' id='Special1'>
          ESPECIALES
        </h1>
        <Especial />
      </div>
    </div>
  );
};

export default Products;
