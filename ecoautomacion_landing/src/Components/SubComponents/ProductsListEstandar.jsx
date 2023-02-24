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
        'Confeccionadora de mallas de alambre electrosoldadas continua',
      descripcion2:
        'Carga de bobinas alambres longitudinales en devanadores motorizados',
      descripcion3: 'Carga automática de alambres transversales',
      descripcion4: 'Velocidad de operación: 90 Sold/min',
      descripcion5: 'Largo de mallas hasta 6 metros',
      descripcion6: 'Diámetros de alambres: 10 mm max',
    },

    {
      nombre: 'Soldadora de Rejas CNC',
      img: SoldadoraDeRejasCNC,
      descripcion: 'Area de trabajo: 2000 mm x 5000 mm',
      descripcion2: 'Soldadura entre alambres de hasta 10 mm de diámetro',
      descripcion3: 'Programacion ilimitada de piezas a fabricar',
      descripcion4: 'Programacion CNC: código G',
    },

    {
      nombre: 'Curvadora-Cortadora-CNC',
      img: CurvadoraCortadoraCNC,
      descripcion:
        'Plano de trabajo 2500 x 2500',
      descripcion2: 'Velocidad avance promedio 1 m/s',
      descripcion3: 'Curvado de alambre hasta 10 mm (máquina estándar)',
      descripcion4: 'Curvado hasta 12 mm (a pedido)',
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
    },
  ]);

  return (
    <div className='lg:grid grid-cols-2 lg:mr-14 lg:space-x-40 lg:justify-items-end mr-5' data-aos="fade-up-left" data-aos-delay="100">
      {persons.map((person, index) => {
        return (
          <StandarProduct
            key={index}
            nombre={person.nombre}
            img={person.img}
            descripcion={person.descripcion}
            descripcion2={person.descripcion2}
            descripcion3={person.descripcion3}
            descripcion4={person.descripcion4}
            descripcion5={person.descripcion5}
            descripcion6={person.descripcion6}
          />
        );
      })}
    </div>
  );
};

export default ProductsListEstandar;
