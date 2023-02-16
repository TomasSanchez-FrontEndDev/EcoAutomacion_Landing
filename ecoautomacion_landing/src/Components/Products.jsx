import React from 'react';
import Estandar from '../Components/SubComponents/ProductsListEstandar';
import Especial from '../Components/SubComponents/ProductsListSpecial';

const Products = () => {
  return (
    <div className='flex bg-gradient-to-b from-[#0E1527] via-[#5DCC97] to-[#0E1527] text-white w-full justify-between'>
      <div>
        <h1>Productos</h1>
        <a href=''>Especiales</a>
        <a href=''>Estandar</a>
      </div>
      <div>
      <h1>ESTANDAR</h1>
      <Estandar />
      <Especial/>
      </div>
    </div>
  );
};

export default Products;
