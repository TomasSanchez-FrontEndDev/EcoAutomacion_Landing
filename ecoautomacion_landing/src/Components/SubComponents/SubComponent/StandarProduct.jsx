import React from 'react';

const StandarProduct = (props) => {
  return (
    <div className='w-[28.75rem] space-y-2 font-[ubuntu] mt-20 font-bold'>
      <h1 className='text-4xl'>{props.nombre}</h1>
      <img src={props.img} alt='' />
      <p>{props.descripcion}</p>
      <p>{props.descripcion2}</p>
      <p>{props.descripcion3}</p>
      <p>{props.descripcion4}</p>
      <p>{props.descripcion5}</p>
      <p>{props.descripcion6}</p>
    </div>
  );
};

export default StandarProduct;
