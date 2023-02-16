import React,{useState} from 'react'
import EspecialProducts from '../SubComponents/SubComponent/SpecialProduct';
import ExampleImg from '../../Img/Ejemplo.png'

const ProductsListSpecial = () => {
  const [EspProducts, setEspProd] = useState([
    {
      nombre: 'Punzonadora',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'Envasadora DoyPack',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'Envasadora Sobres de Azucar',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'Chiller',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },
    {
      nombre: 'xxx',
      img: ExampleImg,
      descripcion:''
    },

    
  ]);
  return (
    <div className='grid grid-cols-2 mr-14 space-x-40 justify-items-end'>
      {EspProducts.map((EspProd,index) => {
        return <EspecialProducts key={index} nombre={EspProd.nombre} img={EspProd.img} descripcion={EspProd.descripcion}/>;
      })}
    </div>
  );
}

export default ProductsListSpecial;