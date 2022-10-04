import React from "react";
import "../style/sobre.css";
import Diego from "../img/programadores.jpg";

import TabPanel from "../components/TabPanel";

function Sobre() {
  return (
    <div id="sobre" className="sobre">
      <div className="conteudo">
        <div className="item">
          <img src={Diego} alt="logo" />
        </div>

        <div className="item">
          <h1>Sobre mim</h1>

          {/* descrição */}
          <TabPanel />
          {/* descrição */}
        </div>
      </div>
    </div>
  );
}

export default Sobre;
