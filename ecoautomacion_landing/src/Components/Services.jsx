import React from "react";

//variables
const limit = 1;
const checkeds = 0;

//elementos
const checks = [document.querySelectorAll("checks")];

//checkear
for (var i = 0; i < checks.length; i++) {
  checks[i].onClick = function () {
    for (var x = 0; x < checks.length; i++) {
      checkeds += checks[i].checked ? 1 : 0;
    }
  };
  if (checkeds > limit) {
    this.checked = false;
  }
}

const Services = () => {
  return (
    <div>
      <form method="post" action="mailto: EcoAutomacion@gmail.com">
        <div id="section1">
          <input id="1" type={"checkbox"} class="checks">
            tetx1
          </input>
          <input id="2" type={"checkbox"} class="checks">
            tetx1
          </input>
          <input id="3" type={"checkbox"} class="checks">
            tetx1
          </input>
          <input id="4" type={"checkbox"} class="checks">
            tetx1
          </input>
        </div>

        <div id="section2"></div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

this.forceUpdate

export default Services;
