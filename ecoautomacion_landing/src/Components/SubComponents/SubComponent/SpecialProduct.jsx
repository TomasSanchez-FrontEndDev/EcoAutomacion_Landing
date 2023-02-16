import React from 'react'

const SpecialProduct = (props) => {
  return (
    <div className='w-[28.75rem] space-y-2 font-[ubuntu] mt-20 font-bold'>
      <h1 className='text-4xl'>{props.nombre}</h1>
      <img src={props.img} alt=""/>
      <p>{props.descripcion}</p>
    </div>
  )
}

export default SpecialProduct