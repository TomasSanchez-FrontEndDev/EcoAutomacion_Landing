import React, { useState } from 'react';
import EspecialProducts from '../SubComponents/SubComponent/SpecialProduct';
import ExampleImg from '../../Img/Ejemplo.png';
import DoyPack from '../../Img/Andrea_machine.jpeg';

const ProductsListSpecial = () => {
  const [EspProducts, setEspProd] = useState([
    {
      nombre: 'Punzonadora',
      img: ExampleImg,
      descripcion: '',
    },
    {
      nombre: 'Envasadora DoyPack',
      img: DoyPack,
      video: '',
      descripcion: '',
    },
    {
      nombre: 'Envasadora de Azucar',
      img: ExampleImg,
      descripcion: '',
    },
    {
      nombre: 'Chiller',
      img: ExampleImg,
      descripcion: '',
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion: '',
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion: '',
    },
    /*{
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },*/
    /* {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },*/
  ]);
  return (
    <div
      className='lg:grid grid-cols-2 lg:mr-14 lg:space-x-40 justify-items-end md:mr-5'
      data-aos='fade-down-left'
      data-aos-delay='400'
    >
      {EspProducts.map((EspProd, index) => {
        return (
          <EspecialProducts
            key={index}
            nombre={EspProd.nombre}
            video={EspProd.video}
            img={EspProd.img}
            descripcion={EspProd.descripcion}
          />
        );
      })}
    </div>
  );
};

export default ProductsListSpecial;
