import React from 'react';

//Secciones

const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');

//variables
const limit = 0;
const index = 0;

//elementos
let checks = [document.getElementById('1'), document.getElementById('2'), document.getElementById('3'), document.getElementById('4')]

//checkear

  for (i = 0; i <= checks.length; i++){
      if(checks[i].checked){
         i = a;
         index = a;
         limit++;
      }
      if(limit > 1){
        checks[0].checked = false;
        checks[1].checked = false;
        checks[2].checked = false;
        checks[3].checked = false;
        checks[index].checked = true;
    }
  }

switch (index) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
}

const Cotizacion = () => {
  return (
    <div>
      <form action='mailto: EcoAutomacion@gmail.com'>
        <div id='section1'>
          <input id='1' type={'checkbox'}>
            tetx1
          </input>
          <input id='2' type={'checkbox'}>
            tetx1
          </input>
          <input id='3' type={'checkbox'}>
            tetx1
          </input>
          <input id='4' type={'checkbox'}>
            tetx1
          </input>
        </div>

        <div id='section2'></div>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Cotizacion;
