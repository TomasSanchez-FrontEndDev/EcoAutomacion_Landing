import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full bg-[#0C1221] h-12 font-[Ubuntu] sticky'>
      <ul className='flex justify-between px-6 text-white h-full items-center w-full'>
        <li><a href="">HOME</a></li>
        <li><a href="">INSTITUCIONAL</a></li>
        <li><a href="">PRODUCTOS</a></li>
        <li><a href="">SERVICIOS</a></li>
        <li><a href="">CLIENTES</a></li>
        <li><a href="">CONTACTO</a></li>
      </ul>
    </div>
  )
}

export default NavBar