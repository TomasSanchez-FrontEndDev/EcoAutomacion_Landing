import React from 'react'

const SpecialProduct = (props) => {
  return (
    <div className='md:w-[28.75rem] space-y-2 font-[ubuntu] mt-20 font-bold '>
      <h1 className='text-4xl'>{props.nombre}</h1>
      <img src={props.img} alt="" className=''/>
      <video src={props.video} autoPlay='false' type="video/mp4"/>
      <p>{props.descripcion}</p>
    </div>
  )
}

export default SpecialProduct