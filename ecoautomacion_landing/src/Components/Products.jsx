import React, { useState, useEffect } from 'react';
import Estandar from '../Components/SubComponents/ProductsListEstandar';
import Especial from '../Components/SubComponents/ProductsListSpecial';
import AddClass from './ScriptsComponents/AddClass';

const Products = () => {
  return (
    <div
      className= 'lg:flex bg-gradient-to-b from-[#0E1527] via-[#5DCC97] to-[#0E1527] text-white w-full justify-between h-full px-4'
      id='Products'
    >
      <AddClass/>
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
