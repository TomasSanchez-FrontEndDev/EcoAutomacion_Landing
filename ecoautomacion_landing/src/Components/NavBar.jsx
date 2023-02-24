import React, { useState, useEffect } from "react";

function Navbar2() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <div
      className={`navbar ${
        isSticky ? "fixed" : ""
      } top-0 left-0 w-full bg-[#0C1221] h-12 font-[Ubuntu] z-20  hidden md:block`}
      id="Navigation"
    >
      <ul className="flex justify-between px-8 text-white h-full items-center w-full">
        <li>
          <a href="#Home" className="cursor-pointer">
            HOME
          </a>
        </li>
        <li>
          <a href="#Hero">INSTITUCIONAL</a>
        </li>
        <li>
          <a href="#Products">PRODUCTOS</a>
        </li>
        {/*       <li>
          <a href="#Services">SERVICIOS</a>
    </li> */}
        <li>
          <a href="#Clients">CLIENTES</a>
        </li>
        <li>
          <a href="#Footer">CONTACTO</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar2;
