import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contactcontainer">
      <div className="contactcontent">
        <h1 className="contacttxt">Noticias sobre nosotros</h1>
        <h3>CONSIGUE UN ESTANDARTE EN EL JUEGO</h3>
        <p>Suscríbete hoy mismo para recibir correos electrónicos con las últimas noticias, vídeos, ofertas y más contenidos relacionados con Anthem™ (además de otras noticias, productos, eventos y promociones de EA).
Cada jugador recibirá un estandarte de jugador como regalo por suscribirse. Los estandartes para el jugador están limitados a uno por cuenta. Haz clic aquí para obtener más información</p>
      </div>
      <div className="contactcontent2">
        <input placeholder="Full Name" className="contactinput"/>
          <div className="divcontent">
            <input placeholder="E-mail" className="divinput"/>
            <input placeholder="Age" className="divinput"/>
          </div>
          <textarea placeholder="Message" className="lastcontact"/>
          <div className="lastspacecontact">
            <button className="contactbutton">
              Send
            </button>
          </div>
      </div>
    </div>
  );
}

export default Contact;
