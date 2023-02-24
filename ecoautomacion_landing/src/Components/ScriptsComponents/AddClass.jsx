import React from 'react';
import Section from './Section';

const AddClass = () => {
  return (
    <div className=''>
      <Section>
      <div className='top-[100px] ml-4 left-0 sticky'>
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
      </Section>
    </div>
  );
};

export default AddClass;
