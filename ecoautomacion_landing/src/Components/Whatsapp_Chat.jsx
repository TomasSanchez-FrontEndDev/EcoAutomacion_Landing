import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import LogoOnly from "../Img/LogoOnly.png";

const Whatsapp_Chat = () => {
  return (
    <div className="absolute right-0">
      <FloatingWhatsApp
      phoneNumber="+543412027486"
      avatar={LogoOnly}
      accountName="EcoAutomacion"
      chatMessage="Bienvenido🎉"
      darkMode
      allowEsc
      statusMessage="Ing. Mariano Gueiler"
    />
    </div>
    
  );
};

export default Whatsapp_Chat;
