import React, { useState } from 'react';
import MaquinaDeMallas from '../../Img/MDM.png';
import SoldadoraDeRejasCNC from '../../Img/SDR-CNC.png';
import CurvadoraCortadoraCNC from '../../Img/CC-CNC.png';
import Ecom3 from '../../Img/Ecom3.png';
import StandarProduct from '../SubComponents/SubComponent/StandarProduct';
import Ecom25 from '../../Img/Ecom25.png';

const ProductsListEstandar = () => {
  const [persons, setPersons] = useState([
    {
      nombre: 'Maquina de Mallas',
      img: MaquinaDeMallas,
      descripcion:
        'Confeccionadora de mallas de alambre electrosoldadas continua Carga de bobinas alambres longitudinales en devanadores motorizados Carga automática de alambres transversales Velocidad de operación: 90 Sold/min Largo de mallas hasta 6 metros Diámetros de alambres: 10 mm max',
    },

    {
      nombre: 'Soldadora de Rejas CNC',
      img: SoldadoraDeRejasCNC,
      descripcion:
        'Area de trabajo: 2000 mm x 5000 mm Soldadura entre alambres de hasta 10 mm de diámetro Programacion ilimitada de piezas a fabricar Programacion CNC: código G',
    },

    {
      nombre: 'Curvadora-Cortadora-CNC',
      img: CurvadoraCortadoraCNC,
      descripcion: 'Plano de trabajo 2500 x 2500 Velocidad avance promedio 1 m/s Curvado de alambre hasta 10 mm (máquina estándar) Curvado hasta 12 mm (a pedido)',
    },

    {
      nombre: 'Ecom 3.0',
      img: Ecom3,
      descripcion: 'Soldadora de malla de alambre semi-automatica',
    },

    {
      nombre: 'Ecom 3.0',
      img: Ecom3,
      descripcion: 'Soldadora de malla de alambre semi-automatica',
    },

    {
      nombre: 'Ecom 2.5',
      img: Ecom25,
      descripcion: 'Soldadora de malla de alambre continua',
    }
  ]);

  return (
    <div className='grid grid-cols-2 mr-14 space-x-20 justify-items-end'>
      {persons.map((person,index) => {
        return <StandarProduct key={index} nombre={person.nombre} img={person.img} descripcion={person.descripcion}/>;
      })}
    </div>
  );
};

export default ProductsListEstandar;
