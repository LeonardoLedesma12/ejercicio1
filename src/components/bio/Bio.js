import React from 'react';
import './Bio.css';

function Bio() {
  return (
    <div className="biocontainer">
      <div className="biocontent">
        <h1 className="biotxt">Biografia</h1>
        <p>Hola, soy Leonardo Kimet Ledesma Grande, me gustan mucho los videojuegos asi que un dia dije:"por que no hacer uno?" y asi es como hemos llegado aqui ;))</p>
      </div>
      <div className="bioimg">
        <img src="https://i.pinimg.com/originals/dd/63/36/dd6336593ad8a0a8f20a26c3510b471b.jpg" className="imbio" alt=""/>
      </div>
    </div>

  );
}

export default Bio;
